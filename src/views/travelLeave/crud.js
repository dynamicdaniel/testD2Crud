import util from '@/libs/util'
export const crudOptions = {
  columns: [
    {
      title: '员工姓名',
      key: 'userName', // userId
      sortable: true, 
      type: 'select', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        disabled: false //【可选】true禁止查询,默认为false
      },
      form: {//form表单的配置
        disabled: false, //禁止添加输入与修改输入【可选】默认false
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '请填写姓名' }
        ],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        },
        addTemplateHandle(form){
          //对添加的form配置做单独处理
          console.log('addTemplateHandle', form)
          let userName = util.cookies.get('username')
          console.log('userName', userName)
          form.value = userName
          form.component.disabled = true
        },
      },
      dict: { //数据字典配置
        // url: '/api/dicts/StatusEnum' //远程获取数据字典
        data: [
        ]
      }  
    },
    {
      title: '请假/出差原因',
      key: 'reason',
      search: {},//启用查询
      type: 'input', //字段类型为选择框
      form: { //配置添加和编辑，根据form的配置自动生成addTemplate和editTemplate
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '请填写原因' }
        ]
      }
    },
    {
      title: '时间', 
      key: 'dateFromTo', 
      search: {
        width: '350px'
      },//启用查询
      type: 'datetimerange', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择时间' }],
        component: { //添加和修改时form表单的组件
          width: '100%',
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true, //可清除,
          }
        }
      }
    },
    {
      title: '请假类别', 
      key: 'type', 
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择请假类别' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
        data: [
          { value: 1, label: '出差' }, 
          { value: 2, label: '请假' }
        ]
      }
    },
    {
      title: '出差地点', 
      key: 'location', 
      search: {
        disabled: true
      },//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请填写联系方式' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      }
    },
    {
      title: '审核结果', 
      key: 'isAgree', 
      search: {
      },//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: false, message: '请填写邮箱地址' }],
        disabled: true,
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
        data: [
          { label: '待审核', value: 0 },
          { label: '通过', value: 1 },
          { label: '驳回', value: 2 }
        ]
      }
    }
  ],
  formOptions: {
    labelWidth: '120px'
  }
  // rowHandle: {
    // width: 0,
    // edit: {
    //   // disabled: true
    //   show: false
    // },
    // remove: {
    //   show: false
    // }
  // }
}