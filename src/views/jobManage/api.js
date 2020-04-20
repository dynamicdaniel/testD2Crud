import request from '@/plugin/axios'
export function GetList (query) {
  return request({
    url: '/human/job/list',
    method: 'get',
    params: query
  })
}
export function AddObj (obj) {
  return request({
    url: '/human/job/create',
    method: 'post',
    data: obj
  })
}
export function UpdateObj (obj) {
  return request({
    url: '/human/job/update',
    method: 'put',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: '/human/job/delete',
    method: 'delete',
    params: { id }
  })
}