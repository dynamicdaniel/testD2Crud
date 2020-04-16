[
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '考勤管理',
    icon: 'users',
    path: '/personalOnOff'
  },
  {
    title: '项目管理',
    icon: 'briefcase',
    path: '/projectInvove'
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