import util from '@/libs/util.js'

export const crudOptions = {
  columns: [
    {
      title: '会议室名称',
      key: 'name',
      align: 'center',
      // sortable: true,
      type: 'input', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        disabled: false //【可选】true禁止查询,默认为false
      },
      form: {//form表单的配置
        // disabled: false, //禁止添加输入与修改输入【可选】默认false
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '请填写会议室名称' }
        ],
        // editTemplateHandle(form) {
        //   console.log('editTemplateHandle', this, form)
        //   let role = util.getRole()
        //   console.log('role', role)
        //   if (role !== 1) {
        //     form.component.disabled = true
        //   }
        // } 
      }
    },
    {
      title: '位置',
      key: 'address',
      align: 'center',
      width: 50,
      search: {},//启用查询
      type: 'input', //字段类型为选择框
      form: { //配置添加和编辑，根据form的配置自动生成addTemplate和editTemplate
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '请填写位置' }
        ]
      }
    },
    {
      title: '容纳人数', 
      key: 'containNum', 
      align: 'center',
      search: {},//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请填写容纳人数' }],
        component: { //添加和修改时form表单的组件
        }
      }
    },
    {
      title: '特点', 
      key: 'feature', 
      align: 'center',
      search: {},//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: false, message: '' }],
        component: { //添加和修改时form表单的组件
        }
      }
    },
    {
      title: '状态', 
      key: 'status', 
      align: 'center',
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择状态' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
        data: [
          { value: 1, label: '空闲' }, 
          { value: 2, label: '使用中' },
        ]
      }
    },
  ],
  page: {
    current: 1,
    size: 10,
    total: 1
  }
}