import util from '@/libs/util.js'

export const crudOptions = {
  columns: [
    {
      title: '待诏岗位',
      key: 'jobId',
      align: 'center',
      // sortable: true,
      // type: 'input', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        disabled: false, //【可选】true禁止查询,默认为false
        component: {
          name: 'el-select', //表单组件名称
          props: { //表单组件的参数，其他组件的参数请查看相应的组件文档
            // separator:",",
            elProps:{ //el-select的参数，dict-select内部封装了el-select
              filterable: true, //可过滤选择项[不同组件参数不同]
              clearable: true, //可清除[不同组件参数不同]
            } 
          },
        }
      },
      form: {//form表单的配置
        // disabled: false, //禁止添加输入与修改输入【可选】默认false
        // addDisabled: false,
        // editDisabled: false,
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '请填写姓名' }
        ],
        component: {
          name: 'el-input', //表单组件名称
          props: { //表单组件的参数，其他组件的参数请查看相应的组件文档
            separator:",",
            filterable: true, //可过滤选择项[不同组件参数不同]
            clearable: true, //可清除[不同组件参数不同]
          },
        }
      }
    },
    {
      title: '候选人',
      key: 'candidate',
      align: 'center',
      width: 50,
      search: {},//启用查询
      type: 'input', //字段类型为选择框
      form: { //配置添加和编辑，根据form的配置自动生成addTemplate和editTemplate
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: false, message: '请填写' }
        ]
      }
    },
    {
      title: '联系方式', 
      key: 'candidateTel', 
      align: 'center',
      search: {},//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: false, message: '请填写联系方式' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            clearable: true //可清除
          }
        }
      }
    },
    {
      title: '应聘阶段', 
      key: 'stage', 
      align: 'center',
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: false, message: '请选择岗位' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        },
        editTemplateHandle (form) {
          console.log('recuritment 应聘极端编辑', form)
          // if (!form.value) {
          // }
        }
      },
      dict: {  //本地数据字典
        data: [
          { value: 1, label: '简历筛选' }, 
          { value: 2, label: '初试' }, 
          { value: 3, label: '复试' }, 
          { value: 4, label: 'offer' }
        ]
      }
    },
    {
      title: '备注', 
      key: 'remark', 
      align: 'center',
      search: {},//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: false, message: '请填写备注' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            clearable: true //可清除
          }
        }
      },
    },
  ],
  page: {
    current: 1,
    size: 10,
    total: 1
  },
  rowHandle: {
    width: 300,
    custom: [
      {
        text: '员工详情',
        type: 'primary',
        size: 'small',
        emit: 'custom-emit'
      }
    ]
  }
}