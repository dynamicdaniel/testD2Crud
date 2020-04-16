// Vue
import Vue from 'vue'
import i18n from './i18n'
import App from './App'
// 核心插件
import d2Admin from '@/plugin/d2admin'
import { d2CrudPlus } from 'd2-crud-plus'
import d2Crud from 'd2-crud-x'
// store
import store from '@/store/index'
import util from '@/libs/util.js'
// 菜单和路由设置
import router from './router'
import menuHeader from '@/menu/header'
import menuAside from '@/menu/aside'
import { admin, hr, manager, employee } from '@/menu'
import { frameInRoutes } from '@/router/routes'

// 核心插件
Vue.use(d2Admin)
Vue.use(d2Crud, { size: 'medium' })
Vue.use(d2CrudPlus, {
 getRemoteDictFunc (url) { //获取数据字典的请求方法，不配置此项则无法加载远程数据字典
   return request({
     url: url,
     method: 'get'
   }).then(ret=>{
     return ret.data  //返回字典数组
   })  
 },
 commonOption(){ //d2-crud option 全局设置
   return {
     options: {size:'mini'} //全局配置表格大小
   }
 }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    console.log('根组件实例化完成', this, util, util.cookies.get('token'), util.cookies.get('role'))
    let token = util.cookies.get('token')
    let role = util.cookies.get('role')
    let suitableMenu = []
    if (token && role) {
      switch(role) {
        case "1":
          suitableMenu = admin
          break;
        case "2":
          suitableMenu = hr
          break;
        case "3":
          suitableMenu = manager
          break;
        case "4":
          suitableMenu = employee
      }
    }
    console.log(suitableMenu)
    // // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', frameInRoutes)
    // // 设置顶栏菜单
    this.$store.commit('d2admin/menu/headerSet', suitableMenu)
    // // 设置侧边栏菜单
    this.$store.commit('d2admin/menu/asideSet', suitableMenu)
    // 初始化菜单搜索功能
    this.$store.commit('d2admin/search/init', menuHeader)
  },
  mounted () {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('d2admin/fullscreen/listen')
  }
}).$mount('#app')
