import util from '@/libs/util.js'
import moment from 'moment'
export const crudOptions = {
  columns: [
    {
      title: '会议名称',
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
          { required: true, message: '请填写会议名称' }
        ], 
      }
    },
    {
      title: '会议室',
      key: 'roomId',
      align: 'center',
      type: 'select', //字段类型为时间选择器datepicker,根据类型可自动生成默认配置
      search: {//查询配置，默认启用查询
        //disabled: false //【可选】true禁止查询,默认为false
      },
      form: {
        rules: [{ required: true, message: '请选择会议室' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            clearable: true //可清除
          }
        }
      },
      dict: {  //本地数据字典
        url: '/human/room/list',
        value: 'id',
        label: 'name'
      }
    },
    {
      title: '开始时间', 
      key: 'startDate', 
      search: {
        // width: '350px'
      },//启用查询
      type: 'datetime', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择时间' }],
        component: { //添加和修改时form表单的组件
          width: '100%',
          props: { //配置自定义组件的属性
            clearable: true, //可清除,
          }
        }
      },
      valueResolve (row,key) {
        console.log('valueResolve', row.startDate)
        if (row.startDate) {
          row.startDate = moment(row.startDate).format('YYYY-MM-DD HH:mm:ss')
        }
      },
    },
    {
      title: '结束时间', 
      key: 'endDate', 
      align: 'center',
      search: {
        // width: '350px'
      },//启用查询
      type: 'datetime', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择时间' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            clearable: true //可清除
          }
        }
      },
      valueResolve (row,key) { 
        console.log('valueResolve', row.endDate)
        if (row.endDate) {
          row.endDate = moment(row.endDate).format('YYYY-MM-DD HH:mm:ss')
        }
      },
    },
    {
      title: '参会人员', 
      key: 'userIds', 
      align: 'center',
      search: {
        component: {
          props: {
            multiple: false
          }
        }
      },//启用查询
      type: 'select', //字段类型为选择框
      form: {
        rules: [{ required: true, message: '请选择参会人员' }],
        component: { //添加和修改时form表单的组件
          props: { //配置自定义组件的属性
            filterable: true, //可过滤选择项
            multiple: true, //支持多选
            clearable: true //可清除
          }
        }
      },
      valueBuilder (row,key) {
        if (row.userIds) {
          row.userIds = row.userIds.split(',').map(v => Number(v))
        }
      },
      valueResolve (row,key) {
        if (row.userIds) {
          row.userIds = row.userIds.join(',')
        }
      },
      dict: {  //本地数据字典
        url: '/human/user/list',
        value: 'id',
        label: 'name'
      }
    }
  ],
  page: {
    current: 1,
    size: 10,
    total: 1
  }
}