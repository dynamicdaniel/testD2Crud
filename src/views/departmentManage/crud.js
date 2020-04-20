import moment from 'moment'
export const crudOptions = {
  columns: [
    {
      title: '部门名称',
      key: 'deptName',
      // sortable: true, 
      type: 'input', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        disabled: false //【可选】true禁止查询,默认为false
      },
      align: 'center',
      width: '150',
      form: {//form表单的配置
        disabled: false, //禁止添加输入与修改输入【可选】默认false
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: true, message: '请填写部门名称' }
        ],
        valueBuilder (row,key) {
          console.log(row, key)
          // 某些组件传入的value值可能是一个复杂对象，而row中的单个属性的值不合适传入
          // 则需要在打开编辑对话框前将row里面多个字段组合成组件需要的value对象
          // 例如：国际手机号(mobileValue为此column的key) 
          // 示例 http://qiniu.veryreader.com/D2CrudPlusExample/#/form/phone
          // row.mobileValue = { phoneNumber: row.phone, callingCode: row.code, countryCode: row.country }
        },
      }
    },
    {
      title: '部门经理',
      key: 'manager',
      search: {},//启用查询
      align: 'center',
      width: '150',
      type: 'input', //字段类型为选择框
      form: { //配置添加和编辑，根据form的配置自动生成addTemplate和editTemplate
        disabled: true,
        rules: [//【可选】添加和修改时的校验规则，不配置则不校验
          { required: false, message: '请填写经理姓名' }
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
      title: '创建时间',
      key: 'dateFromTo',
      search: {
        width: '350px'
      },//启用查询
      type: 'datetimerange', //字段类型为选择框
      form: { //配置添加和编辑，根据form的配置自动生成addTemplate和editTemplate
        disabled:true, //是否禁用该字段的添加与修改
        addDisabled: true, //是否在添加时在编辑框中隐藏该字段
        editDisabled: true, //是否在修改时在编辑框中隐藏该字段
        component: {
          span: 24,
          'time-arrow-control': true,
          'default-time': ['12:00:00', '12:00:00'],
        }
      },
      valueBuilder (row,key) {
        // 某些组件传入的value值可能是一个复杂对象，而row中的单个属性的值不合适传入
        // 则需要在打开编辑对话框前将row里面多个字段组合成组件需要的value对象
        // 例如：国际手机号(mobileValue为此column的key) 
        // 示例 http://qiniu.veryreader.com/D2CrudPlusExample/#/form/phone
        // row.mobileValue = { phoneNumber: row.phone, callingCode: row.code, countryCode: row.country }
      },
      dict: { //数据字典配置
        // url: '/api/dicts/StatusEnum' //远程获取数据字典
      },
      formatter (row, column, value, index) {
        // cell 格式化，与d2-crud一致
        console.log('formatter', row, column, value, index)
        return row.createAt && moment(row.createA).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  ],
  page: {
    current: 1,
    size: 10,
    total: 1
  },
}