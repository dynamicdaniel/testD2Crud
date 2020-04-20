export const crudOptions = {
  columns: [
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      // sortable: true,
      type: 'input', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        disabled: false //【可选】true禁止查询,默认为false
      },
      form: {//form表单的配置
        //禁止添加输入与修改输入【可选】默认false
        // rules: [//【可选】添加和修改时的校验规则，不配置则不校验
        //   { required: true, message: '请填写姓名' }
        // ]
        disabled: true
      }
    },
    {
      title: '性别',
      key: 'sex',
      align: 'center',
      width: 50,
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
      },
    },
    {
      title: '部门', 
      key: 'deptId', 
      width: 100,
      align: 'center',
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择部门' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            // multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
        url: '/human/dept/list', //本地数据字典
        value:'id', //value的属性名
        label:'deptName', //label的属性名
        // children:'children', //children的属性名
        isTree: false //是否是树形结构
      }
    },
    {
      title: '岗位', 
      key: 'jobId', 
      width: 150,
      align: 'center',
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择岗位' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            // multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
        url: '/human/job/list',
        value: 'id',
        label: 'jobName'
      }
    },
    {
      title: '任职资格', 
      key: 'qualification', 
      align: 'center',
      search: {},//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择任职资格' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            // multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
        data: [
          { value: 1, label: 'T1' }, 
          { value: 2, label: 'T2' }, 
          { value: 3, label: 'T3' }, 
          { value: 4, label: 'T4' }, 
          { value: 5, label: 'T5' }, 
          { value: 6, label: 'T6' }, 
          { value: 7, label: '低级' }, 
          { value: 8, label: '中级' }, 
          { value: 9, label: '高级' }, 
          { value: 10, label: '管理' }
        ]
      }
    },
    {
      title: '联系方式', 
      key: 'tel', 
      align: 'center',
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
      title: '创建时间', 
      key: 'createAt', 
      width: 150,
      align: 'center',
      search: {
        disabled: true
      },//启用查询
      type: 'datetime', //字段类型为选择框
      form: {
        disabled: true,
        rules: [{ required: true, message: '' }],
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
      title: '邮箱地址', 
      key: 'email',
      width: 200,
      align: 'center',
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
      align: 'center',
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
      align: 'center',
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
      align: 'center',
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
      align: 'center',
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