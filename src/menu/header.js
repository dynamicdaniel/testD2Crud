// 菜单 顶栏
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
    path: '/departmentManage'
  },
  {
    title: 'HR管理',
    icon: 'id-card',
    path: '/HRManage'
  },
  {
    title: '请假出差',
    icon: 'id-card',
    path: '/travelLeave'
  },
  {
    title: '项目查询',
    icon: 'id-card',
    path: '/projectManage'
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
      {
        title: '预定会议室',
        icon: 'id-card',
        path: '/bookMeetRoom'
      },
    ]
  }
]
