import util from '@/libs/util.js'

export const crudOptions = {
  columns: [
    {
      title: '岗位',
      key: 'jobName',
      align: 'center',
      // sortable: true,
      type: 'input', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        disabled: false, //【可选】true禁止查询,默认为false
        component: {
          props: { //表单组件的参数，其他组件的参数请查看相应的组件文档
            // separator:",",
            elProps:{ //el-select的参数，dict-select内部封装了el-select
              // filterable: true, //可过滤选择项[不同组件参数不同]
              clearable: true, //可清除[不同组件参数不同]
            } 
          },
        }
      },
      form: {//form表单的配置
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '请填写姓名' }
        ],
        component: {
          // name: 'el-input', //表单组件名称
          props: { //表单组件的参数，其他组件的参数请查看相应的组件文档
            // separator:",",
            // filterable: true, //可过滤选择项[不同组件参数不同]
            clearable: true, //可清除[不同组件参数不同]
          },
        }
      }
    }
  ],
  page: {
    current: 1,
    size: 10,
    total: 1
  },
  // rowHandle: {
  //   width: 300,
  //   custom: [
  //     {
  //       text: '员工详情',
  //       type: 'primary',
  //       size: 'small',
  //       emit: 'custom-emit'
  //     }
  //   ]
  // }
}