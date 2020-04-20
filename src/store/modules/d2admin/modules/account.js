import { Message, MessageBox } from 'element-ui'
import util from '@/libs/util.js'
import router from '@/router'
import { AccountLogin } from '@api/sys.login'
import { admin, hr, manager, employee } from '@/menu'
import { frameInRoutes } from '@/router/routes'

export default {
  namespaced: true,
  actions: {
    /**
     * @description 登录
     * @param {Object} context
     * @param {Object} payload username {String} 用户账号
     * @param {Object} payload password {String} 密码
     * @param {Object} payload route {Object} 登录成功后定向的路由对象 任何 vue-router 支持的格式
     */
    login ({ dispatch }, {
      account = '',
      password = '',
      role = 0
    } = {}) {
      return new Promise((resolve, reject) => {
        // 开始请求登录接口
        AccountLogin({
          account,
          password,
          role
        })
          .then(async res => {
            // 设置 cookie 一定要存 uuid 和 token 两个 cookie
            // 整个系统依赖这两个数据进行校验和存储
            // uuid 是用户身份唯一标识 用户注册的时候确定 并且不可改变 不可重复
            // token 代表用户当前登录状态 建议在网络请求中携带 token
            // 如有必要 token 需要定时更新，默认保存一天
            let { name, role, id, token, sex, deptId } = res
            console.log('accountLogin token', res)
            util.cookies.set('uuid', id),
            util.cookies.set('id', id),
            util.cookies.set('token', token)
            util.cookies.set('role', role)
            util.cookies.set('username', name)
            util.cookies.set('sex', sex)
            util.cookies.set('deptId', deptId)
            // 处理路由 得到每一级的路由设置
            let suitableMenu = []
            switch(role) {
              case 1: //'admin'
                suitableMenu = admin
                break;
              case 2://'admin'
                suitableMenu = hr
                break;
              case 3://'admin'
                suitableMenu = manager
                break;
              case 4://'admin'
                suitableMenu = employee
            }
            this.commit('d2admin/page/init', frameInRoutes)
            // 设置顶栏菜单
            this.commit('d2admin/menu/headerSet', suitableMenu)
            // 设置侧边栏菜单
            this.commit('d2admin/menu/asideSet', suitableMenu)
            // 设置 vuex 用户信息
            await dispatch('d2admin/user/set', {
              ...res
            }, { root: true })
            // 用户登录后从持久化数据加载一系列的设置
            await dispatch('load')
            // 结束
            resolve()
          })
          .catch(err => {
            console.log('err: ', err)
            reject(err)
          })
      })
    },
    /**
     * @description 注销用户并返回登录页面
     * @param {Object} context
     * @param {Object} payload confirm {Boolean} 是否需要确认
     */
    logout ({ commit, dispatch }, { confirm = false } = {}) {
      /**
       * @description 注销
       */
      async function logout () {
        // 删除cookie
        util.cookies.remove('token')
        util.cookies.remove('uuid')
        util.cookies.remove('role')
        util.cookies.remove('username')
        // 清空 vuex 用户信息
        await dispatch('d2admin/user/set', {}, { root: true })
        // 跳转路由
        router.push({
          name: 'login'
        })
      }
      // 判断是否需要确认
      if (confirm) {
        commit('d2admin/gray/set', true, { root: true })
        MessageBox.confirm('确定要注销当前用户吗', '注销用户', {
          type: 'warning'
        })
          .then(() => {
            commit('d2admin/gray/set', false, { root: true })
            logout()
          })
          .catch(() => {
            commit('d2admin/gray/set', false, { root: true })
            Message({
              message: '取消注销操作'
            })
          })
      } else {
        logout()
      }
    },
    /**
     * @description 用户登录后从持久化数据加载一系列的设置
     * @param {Object} context
     */
    load ({ dispatch }) {
      return new Promise(async resolve => {
        // DB -> store 加载用户名
        await dispatch('d2admin/user/load', null, { root: true })
        // DB -> store 加载主题
        await dispatch('d2admin/theme/load', null, { root: true })
        // DB -> store 加载页面过渡效果设置
        await dispatch('d2admin/transition/load', null, { root: true })
        // DB -> store 持久化数据加载上次退出时的多页列表
        await dispatch('d2admin/page/openedLoad', null, { root: true })
        // DB -> store 持久化数据加载侧边栏折叠状态
        await dispatch('d2admin/menu/asideCollapseLoad', null, { root: true })
        // DB -> store 持久化数据加载全局尺寸
        await dispatch('d2admin/size/load', null, { root: true })
        // DB -> store 持久化数据加载颜色设置
        await dispatch('d2admin/color/load', null, { root: true })
        // end
        resolve()
      })
    }
  }
}
