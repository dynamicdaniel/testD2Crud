<template>
  <d2-container class='travelLeave_wrapper'>
    <crud-search v-if='hasFilter' ref="search" :options="crud.searchOptions" @submit="handleSearch" class="d2-mb-10" ></crud-search>
    <d2-crud ref="d2Crud"
      :columns="crud.columns"
      :data="crud.list"
      :rowHandle="hasOperate ? crud.rowHandle : null"
      :form-options="crud.formOptions"
      :options="crud.options"
      :loading="crud.loading"
      @form-data-change="handleFormDataChange"
      @custom-agree='handleAgree'
      @custom-deny='handleDeny'
    >
      <!-- <el-button slot="header" icon='el-icon-plus' style="margin-bottom: 5px" size="small" type="primary" @click="addRow">新增申请</el-button> -->
    </d2-crud>
    <crud-footer ref="footer" slot="footer"
      :current="crud.page.current"
      :size="crud.page.size"
      :total="crud.page.total"
      @change="handlePaginationChange"
    >
    </crud-footer>
  </d2-container>
</template>

<script>
import util from '@/libs/util.js'
import { crudOptions } from './crud' //上文的crudOptions配置
import { d2CrudPlus } from 'd2-crud-plus'
import { AddObj, GetList, UpdateObj, DelObj } from './api' //查询添加修改删除的http请求接口
export default {
  name: 'travelLeave',
  mixins: [d2CrudPlus.crud], // 最核心部分，继承d2CrudPlus.crud
  computed: {
    hasFilter () {
      let authRole = [2]
      let curRole = util.getRole()
      return authRole.indexOf(curRole) !== -1
    },
    hasOperate () {
      let curRole = util.getRole()
      return curRole === 3
    }
  },
  methods: {
    getCrudOptions () { return crudOptions },
    pageRequest (query) {
      console.log('request', query)
      let roleType = util.cookies.get('role')
      let { current, size, ...filter } = query
      let params = { roleType, page: current, size, ...filter }
      return GetList(params)
        .then(res => {
          let { list, total, page, size } = res || {}
          let formatData = {
            data: {
              records: list,
              current: page,
              size,
              total
            }
          }
          return formatData
        })
    },// 数据请求
    addRequest (row) {
      console.log('addRequest', row)
      return AddObj(row)
    }, // 添加请求
    updateRequest (row) {return UpdateObj(row)},// 修改请求
    handleAgree (record) {
      let { row = {} } = record || {}
      let { id } = row
      let params = { id, isAgree: 1 }
      UpdateObj(params)
        .then(res => {
          console.log(res)
        })
      this.doRefresh()
    },
    handleDeny (record) {
      let { row = {} } = record || {}
      let { id } = row
      let params = { id, isAgree: 2 }
      UpdateObj(params)
        .then(res => {
          console.log(res)
        })
      this.doRefresh()
    },
    delRequest (row) {return DelObj(row.id)},// 删除请求
    // 还可以覆盖d2CrudPlus.crud中的方法来实现你的定制化需求
  },
  mounted () {
    console.log('travelLeave instance mounted', this)
  }
}
</script>
<style lang="scss">
  .travelLeave_wrapper {
    .el-form-item__content {
      .el-date-editor--datetimerange.el-input__inner {
        width: 100%
      }
    }
  }
</style>