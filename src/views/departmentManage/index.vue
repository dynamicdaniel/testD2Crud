<template>
  <d2-container>
    <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch" class="d2-mb-10" ></crud-search>
    <d2-crud ref="d2Crud"
      :columns="crud.columns"
      :data="crud.list"
      :rowHandle="crud.rowHandle"
      edit-title="修改"
      :add-template="crud.addTemplate"
      :add-rules="crud.addRules"
      :edit-template="crud.editTemplate"
      :edit-rules="crud.editRules"
      :form-options="crud.formOptions"
      :options="crud.options"
      :loading="crud.loading"
      @dialog-open="handleDialogOpen"
      @row-edit="handleRowEdit"
      @row-add="handleRowAdd"
      @row-remove="handleRowRemove"
      @dialog-cancel="handleDialogCancel"
      @form-data-change="handleFormDataChange"
    >    
    >
      <el-button slot="header" style="margin-bottom: 5px" size="small" type="primary" @click="addRow">新增</el-button>
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
  name: 'departmentManage',
  data () {
    return {
      drawer: false
    }
  },
  mixins: [d2CrudPlus.crud], // 最核心部分，继承d2CrudPlus.crud
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
    addRequest (row) { return AddObj(row) }, // 添加请求
    updateRequest (row) {return UpdateObj(row)},// 修改请求
    delRequest (row) {return DelObj(row.id)},// 删除请求
    // 还可以覆盖d2CrudPlus.crud中的方法来实现你的定制化需求
    
  }
}
</script>