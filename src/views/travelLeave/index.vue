<template>
  <d2-container class='travelLeave_wrapper'>
    <crud-search v-if='hasFilter' ref="search" :options="crud.searchOptions" @submit="handleSearch" class="d2-mb-10" ></crud-search>
    <d2-crud ref="d2Crud"
      :columns="crud.columns"
      :data="crud.list"
      :add-template="crud.addTemplate"
      :add-rules="crud.addRules"
      :form-options="crud.formOptions"
      :options="crud.options"
      @dialog-open="handleDialogOpen"
      @row-add="handleRowAdd"
      @dialog-cancel="handleDialogCancel"
      @form-data-change="handleFormDataChange"
    >
      <el-button slot="header" icon='el-icon-plus' style="margin-bottom: 5px" size="small" type="primary" @click="addRow">新增</el-button>
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
  name: 'page1',
  mixins: [d2CrudPlus.crud], // 最核心部分，继承d2CrudPlus.crud
  computed: {
    hasFilter () {
      let authRole = [2]
      let curRole = util.getRole()
      return authRole.indexOf(curRole) !== -1
    }
  },
  methods: {
    getCrudOptions () { return crudOptions },
    pageRequest (query) {
      return Promise.resolve({
        data:{
          records: [{
            name: 'test',
            sex: '男'
          }],
          current: 1,
          total: 1
        }
      })
      return GetList(query)
    },// 数据请求
    addRequest (row) {
      console.log('addRequest', row)
      return AddObj(row)
    }, // 添加请求
    updateRequest (row) {return UpdateObj(row)},// 修改请求
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