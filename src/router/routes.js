import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
// 1 管理员 2 人事 3 部门经理 4 员工
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: [1,2,3,4]
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: 'employeeManage',
        name: 'employeeManage',
        meta: {
          title: '员工管理',
          auth: [1,2]
        },
        component: _import('employeeManage')
      },
      {
        path: 'departmentManage',
        name: 'departmentManage',
        meta: {
          title: '部门管理',
          auth: [1,3]
        },
        component: _import('departmentManage')
      },
      // {
      //   path: 'HRManage',
      //   name: 'HRManage',
      //   meta: {
      //     title: 'HR管理',
      //     auth: [1]
      //   },
      //   component: _import('HRManage')
      // },
      {
        path: 'travelLeave',
        name: 'travelLeave',
        meta: {
          title: '考勤管理',
          auth: [2,3]
        },
        component: _import('travelLeave')
      },
      {
        path: 'checkingProject',
        name: 'checkingProject',
        meta: {
          title: '查看项目',
          auth: [2]
        },
        component: _import('checkingProject') 
      },
      {
        path: 'checkingProjectEmploy',
        name: 'checkingProjectEmploy',
        meta: {
          title: '查看项目',
          auth: [4]
        },
        component: _import('checkingProjectEmploy') 
      },
      {
        path: 'projectManage',
        name: 'projectManage',
        meta: {
          title: '项目管理',
          auth: [3]
        },
        component: _import('projectManage')
      },
      {
        path: 'recruitment',
        name: 'recruitment',
        meta: {
          title: '招聘信息',
          auth: [2]
        },
        component: _import('recruitment')
      },
      {
        path: 'jobManage',
        name: 'jobManage',
        meta: {
          title: '岗位管理',
          auth: [2]
        },
        component: _import('jobManage')
      },
      {
        path: 'personalOnOff',
        name: 'personalOnOff',
        meta: {
          title: '请假出差',
          auth: [4]
        },
        component: _import('personalOnOff')
      },
      {
        path: 'meetingRoomInfo',
        name: 'meetingRoomInfo',
        meta: {
          title: '会议室信息',
          auth: [2]
        },
        component: _import('meetingRoomInfo')
      },
      {
        path: 'meetingInfo',
        name: 'meetingInfo',
        meta: {
          title: '会议信息',
          auth: [2]
        },
        component: _import('meetingInfo')
      },
      {
        path: 'myMeetingInfo',
        name: 'myMeetingInfo',
        meta: {
          title: '我的会议',
          auth: [2,3,4]
        },
        component: _import('myMeetingInfo')
      },
      // {
      //   path: 'page3',
      //   name: 'page3',
      //   meta: {
      //     title: '页面 3',
      //     auth: true
      //   },
      //   component: _import('demo/page3')
      // },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  },
  {
    path: '/401',
    name: '401',
    component: _import('system/error/401')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
