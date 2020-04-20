import request from '@/plugin/axios'
export function GetList (query) {
  return request({
    url: '/human/project/list',
    method: 'get',
    params: query
  })
}
export function AddObj (obj) {
  return request({
    url: '/human/project/create',
    method: 'post',
    data: obj
  })
}
export function UpdateObj (obj) {
  return request({
    url: '/human/project/update',
    method: 'put',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: '/human/project/delete',
    method: 'delete',
    params: { id }
  })
}