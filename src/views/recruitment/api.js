import request from '@/plugin/axios'
export function GetList (query) {
  return request({
    url: '/human/recruitment/list',
    method: 'get',
    params: query
  })
}
export function AddObj (obj) {
  return request({
    url: '/human/recruitment/create',
    method: 'post',
    data: obj
  })
}
export function UpdateObj (obj) {
  return request({
    url: '/human/recruitment/update',
    method: 'put',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: '/human/recruitment/delete',
    method: 'delete',
    params: { id }
  })
}