export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '员工考勤',
    icon: 'id-card',
    path: '/employeeOnOff'
  },
  {
    title: '项目管理',
    icon: 'id-card',
    path: '/project'
  },
  {
    title: '会议管理',
    icon: 'id-card',
    children: [
      {
        title: '我的会议',
        icon: 'id-card',
        path: '/personalMeet'
      },
      {
        title: '查看会议室',
        icon: 'id-card',
        path: '/checkMeetRoom'
      },
    ]
  }
]