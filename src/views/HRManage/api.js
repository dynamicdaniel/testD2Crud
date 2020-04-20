import request from '@/plugin/axios'
export function GetList (query) {
  return request({
    url: '/human/user/list',
    method: 'get',
    params: query
  })
}
export function AddObj (obj) {
  return request({
    url: '/human/user/create',
    method: 'post',
    data: obj
  })
}
export function UpdateObj (obj) {
  return request({
    url: '/human/user/update',
    method: 'put',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: '/human/user/delete',
    method: 'delete',
    params: { id }
  })
}