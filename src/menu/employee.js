export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '请假出差',
    icon: 'users',
    path: '/personalOnOff'
  },
  {
    title: '参与项目',
    icon: 'briefcase',
    path: '/checkingProject'
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