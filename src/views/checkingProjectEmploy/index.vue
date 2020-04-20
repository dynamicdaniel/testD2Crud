<template>
  <d2-container>
    <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch" class="d2-mb-10" ></crud-search>
    <d2-crud ref="d2Crud"
      :columns="crud.columns"
      :data="crud.list"
      :form-options="crud.formOptions"
      :options="crud.options"
      @dialog-open="handleDialogOpen"
      @dialog-cancel="handleDialogCancel"
      @form-data-change="handleFormDataChange"
    >
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
import util from "@/libs/util"
import { crudOptions } from './crud' //上文的crudOptions配置
import { d2CrudPlus } from 'd2-crud-plus'
import { AddObj, GetList, UpdateObj, DelObj } from './api' //查询添加修改删除的http请求接口
export default {
  name: 'checkingProject',
  mixins: [d2CrudPlus.crud], // 最核心部分，继承d2CrudPlus.crud
  methods: {
    getCrudOptions () { return crudOptions },
    pageRequest (query) {
      let roleType = util.cookies.get('role')
      let userId = util.cookies.get('id')
      let { current, size, ...filter } = query
      let params = { roleType, page: current, size, ...filter, userId }
      return GetList(params)
        .then(res => {
          console.log('employeeManage list res', res)
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
    // 还可以覆盖d2CrudPlus.crud中的方法来实现你的定制化需求
  }
}
</script>