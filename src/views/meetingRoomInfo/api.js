import request from '@/plugin/axios'
export function GetList (query) {
  return request({
    url: '/human/room/list',
    method: 'get',
    params: query
  })
}
export function AddObj (obj) {
  return request({
    url: '/human/room/create',
    method: 'post',
    data: obj
  })
}
export function UpdateObj (obj) {
  return request({
    url: '/human/room/update',
    method: 'put',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: '/human/room/delete',
    method: 'delete',
    params: { id }
  })
}