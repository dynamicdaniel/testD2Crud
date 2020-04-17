export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '员工管理',
    icon: 'users',
    path: '/employeeManage'
  },
  {
    title: '考勤查询',
    icon: 'id-card',
    path: '/travelLeave'
  },
  {
    title: '项目查询',
    icon: 'id-card',
    path: '/project'
  },
  {
    title: '招聘信息',
    icon: 'id-card',
    path: '/recruitment'
  },
  {
    title: '会议室管理',
    icon: 'id-card',
    children: [
      {
        title: '会议室信息',
        icon: 'id-card',
        path: '/meetingRoomInfo'
      },
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
      {
        title: '预定会议室',
        icon: 'id-card',
        path: '/bookMeetRoom'
      },
    ]
  }
]