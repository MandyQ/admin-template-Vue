
/* eslint-disable */
import request from '@/utils/request'

export function login(username, password) {
  return request({
    url:'/user/login',
    methods:'get',
    data:{
      username:username,
      password:password
    },
  })
}

  // export function login(username,password) {
  //   return axios.post('/user/login', {
  //     username:username,
  //     password:password
  //   })
  // }

  export function getInfo(username) {
    return request({
      url:'/getinfo',
      methods:'get',
    })
  }

  export function logout(username) {
    return request({
      url:'/user/logout',
      methods:'get',
    })
  }







