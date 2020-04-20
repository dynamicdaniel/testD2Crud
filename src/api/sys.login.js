import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/human/user/login', //'/api/login', 
    method: 'post',
    data
  })
}
