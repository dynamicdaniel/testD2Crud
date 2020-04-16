export const crudOptions = {
  columns: [
    {
      title: '姓名',
      key: 'name',
      sortable: true, 
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
      title: '性别',
      key: 'sex',
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: { //配置添加和编辑，根据form的配置自动生成addTemplate和editTemplate
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '请选择性别' }
        ]
      },
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
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: {
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
        data: [
          { value: 'sz', label: '深圳' }, 
          { value: 'gz', label: '广州' }, 
          { value: 'wh', label: '武汉' }, 
          { value: 'sh', label: '上海' }
        ]
      }
    },
    {
      title: '岗位', 
      key: 'jobId', 
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择岗位' }],
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
      title: '任职资格', 
      key: 'qualification', 
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择任职资格' }],
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
          { value: '1', label: '低级' }, 
          { value: '2', label: '中级' }, 
          { value: '3', label: '高级' }, 
          { value: '4', label: '管理' }
        ]
      }
    },
    {
      title: '联系方式', 
      key: 'tel', 
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
      },
      dict: {  //本地数据字典
        data: [
          { value: 'sz', label: '深圳' }, 
          { value: 'gz', label: '广州' }, 
          { value: 'wh', label: '武汉' }, 
          { value: 'sh', label: '上海' }
        ]
      }
    },
    {
      title: '邮箱地址', 
      key: 'email', 
      search: {
        disabled: true
      },//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: false, message: '请填写邮箱地址' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
      }
    },
    {
      title: '紧急联系人', 
      key: 'urgentMan', 
      search: {
        disabled: true
      },//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: false, message: '请填写紧急联系人' }],
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
          { value: 'sz', label: '深圳' }, 
          { value: 'gz', label: '广州' }, 
          { value: 'wh', label: '武汉' }, 
          { value: 'sh', label: '上海' }
        ]
      }
    },
    {
      title: '紧急联系人电话', 
      key: 'urgentManTel', 
      search: {
        disabled: true
      },//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: false, message: '请填写紧急联系人电话' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
      }
    },
    {
      title: '系统账号', 
      key: 'account', 
      search: {
        disabled: true
      },//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请填写系统账号' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
      }
    },
    {
      title: '密码', 
      key: 'password', 
      search: {
        disabled: true
      },//启用查询
      type: 'input', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请填写密码' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
      }
    }
  ],
  rowHandle: {
    width: 400,
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