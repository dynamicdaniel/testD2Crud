import util from "@/libs/util";
import request from '@/plugin/axios'
export const crudOptions = {
  columns: [
    {
      title: '项目名称',
      key: 'name',
      // sortable: true, 
      type: 'input', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        disabled: false //【可选】true禁止查询,默认为false
      },
      form: {//form表单的配置
        disabled: false, //禁止添加输入与修改输入【可选】默认false
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '请填写姓名' }
        ]
      }
    },
    {
      title: '项目负责人',
      key: 'principalMan',
      type: 'select', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        disabled: false, //【可选】true禁止查询,默认为false
      },
      form: {//form表单的配置
        disabled: false, //禁止添加输入与修改输入【可选】默认false
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '项目负责人' }
        ]
      },
      dict: {
        data: new Promise((resolve, reject) => {
          let role = util.cookies.get('role')
          if (role == 3) {
            request({
              url: '/human/user/list',
              method: 'get',
              params: {
                deptId: util.cookies.get('deptId')
              }
            }).then(res => {
              console.log('dict promise', res)
              let formatList = res.list.map(v => ({
                value: v.id,
                label: v.name
              }))
              resolve(formatList)
            })
          }
        })
      }
    },
  ]
}