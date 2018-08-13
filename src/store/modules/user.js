import {getToken, setToken, removeToken} from '@/utils/auth'
import {login, getInfo, logout } from '@/api/login'


const user = {
  state: {
    name:'',
    token:getToken(),
    avatar:'',
    roles:[]
  },
  mutations: {
    SET_NAME: (state, name) => {
      return state.name = name
    },
    SET_TOKEN: (state, token) => {
      return state.token = token
    },
    SET_AVATAR: (state, avatar) => {
      return state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      return state.roles = roles
    }
  },
  actions: {
    Login({commit}, userInfo){
      let username = userInfo.username.trim()
      console.log(username)
      console.log(userInfo.password)
      return new Promise((resolve, reject) => {
        login(username, userInfo.pass).then( res => {
          const data = res.data
          console.log(data)  //admin
          setToken(data.token) //拿到token
          commit('SET_TOKEN', data.token) //触发函数设置(新)token
          resolve()  //成功， 继续往下执行 （参数 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去）
        }).catch(err => {
          reject(err)
        })
      })
    },
    //根据token 获取用户信息的权限信息
    GetInfo({commit}, state){
      return new Promise(function(resolve, reject) {
        getInfo(state.token).then( res => {
          if(res.roles && res.roles.length > 0) {//有用户权限信息
            commit('SET_ROLES', res.roles)
            commit('SET_AVATAR', res.avatar)
            resolve()
          }
          return false
        }).catch(err => {
          reject(err)
        })
      })
    },
    //登出
    Logout({commit}, state) {
      return new Promise(function(resolve, reject) {
        logout(state.token).then( () => {
          commit('SET_ROLES', [])
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    //前端登出
    FedLogout({commit}, state) {
      return new Promise(function(resolve) {
        logout(state.token).then( () => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        })
      })
    }
  }
}

export default user
