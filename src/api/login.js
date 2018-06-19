import request from '@/utils/request'

export function login(username, password) {
  return request({
    url:'/login',
    methods:'post',
    data:{
      username:username,
      password:password
    }
  })
}

  export function getInfo(username) {
    return request({
      url:'/getinfo',
      methods:'get',
    })
  }

  export function logout(username) {
    return request({
      url:'/logout',
      methods:'post',
    })
  }







