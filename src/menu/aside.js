// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '员工管理',
    icon: 'users',
    path: '/employeeManage'
    // children: [
    //   { path: '/page1', title: '页面 1' },
    //   { path: '/page2', title: '页面 2' },
    //   { path: '/page3', title: '页面 3' }
    // ]
  },
  {
    title: '部门管理',
    icon: 'briefcase',
    path: 'departmentManage'
  },
  {
    title: 'HR管理',
    icon: 'id-card',
    path: 'HRManage'
  }
]
