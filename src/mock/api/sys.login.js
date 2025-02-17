const userDB = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: 'Admin', role: 1 }, // 'admin'
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: 'Editor', role: 2 },// 'hr'
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: 'User1', role: 3 },// 'manager'
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: 'User1', role: 4 }// 'normal'
]

export default [
  {
    path: '/api/login',
    method: 'post',
    handle ({ body }) {
      console.log(body)
      const user = userDB.find(e => e.username === body.username && e.password === body.password && e.role === body.role)
      if (user) {
        return {
          code: 0,
          msg: '登录成功',
          data: {
            ...user,
            token: '8dfhassad0asdjwoeiruty'
          }
        }
      } else {
        return {
          code: 401,
          msg: '用户名或密码错误',
          data: {}
        }
      }
    }
  }
]
