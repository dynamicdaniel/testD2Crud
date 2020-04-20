import util from "@/libs/util"

export const crudOptions = {
  getRole() {
    return util.cookies.getRole()
  },
  columns: [
    {
      title: '项目员工',
      key: 'userIds',
      type: 'select', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        disabled: true, //【可选】true禁止查询,默认为false
        component: {
          props: {
            multiple: false
          }
        }
      },
      form: {
        component: { //添加和修改时form表单的组件
          disabled: true,
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: { //数据字典配置
        url: '/human/user/list', //远程获取数据字典
        value: 'id',
        label: 'name'
      }
    },
    {
      title: '项目名称',
      key: 'name',
      search: {
        disabled: false,
      },//启用查询
      type: 'input', //字段类型为选择框
      dict: { //数据字典配置
        // url: '/api/dicts/StatusEnum' //远程获取数据字典
        data: [
          { value: '1', label: '男' },
          { value: '2', label: '女' },
        ]
      }
    },
    {
      title: '部门', 
      key: 'deptId', 
      search: {
        disabled: true,
      },//启用查询
      type: 'select', //字段类型为选择框
      form: {
        disabled: true,
        rules: [{ required: true, message: '请选择部门' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
        // url: '/api/dicts/StatusEnum' //远程获取数据字典
        data: [
          { value: 'sz', label: '深圳' }, 
          { value: 'gz', label: '广州' }, 
          { value: 'wh', label: '武汉' }, 
          { value: 'sh', label: '上海' }
        ]
      }
    },
    {
      title: '项目负责人', 
      key: 'principalMan', 
      search: {
        disabled: true
      },//启用查询
      type: 'input', //字段类型为选择框
      form: {
        disabled: true,
        rules: [{ required: true, message: '请填写项目负责人' }],
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
          { value: 'sz', label: '前端开发' }, 
          { value: 'gz', label: '后端开发' }, 
          { value: 'wh', label: '运维' }, 
          { value: 'sh', label: '测试' }
        ]
      }
    },
    {
      title: '时间', 
      key: 'dateFromTo', 
      search: {
        disabled: true
      },//启用查询
      type: 'datetimerange', //字段类型为选择框
      form: {
        disabled: true,
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
  ],
  page: {
    current: 1,
    size: 10,
    count: 1
  }
}