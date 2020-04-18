<template>
  <d2-container>
    <!-- <template slot="header">员工信息管理</template> -->
    <d2-crud ref="d2Crud"
        :columns="crud.columns"
        :data="crud.list"
        :rowHandle="crud.rowHandle"
        :form-options="crud.formOptions"
        :options="crud.options"
        :loading="crud.loading"
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
import { crudOptions } from './crud' //上文的crudOptions配置
import { d2CrudPlus } from 'd2-crud-plus'
import { AddObj, GetList, UpdateObj, DelObj } from './api' //查询添加修改删除的http请求接口
export default {
  name: 'myMeetingInfo',
  mixins: [d2CrudPlus.crud], // 最核心部分，继承d2CrudPlus.crud
  methods: {
    getCrudOptions () { return crudOptions },
    pageRequest (query) {
      console.log('request', query)
      console.log('pageRequest', this.crud.page)
      let { size } = query
      return Promise.resolve({
        data:{
          records: [{
            name: 'test',
            sex: '男'
          }],
          current: 1,
          size,
          // size: 10,
          total: 20
        }
      })
      return GetList(query)
    },// 数据请求
  }
}
</script>