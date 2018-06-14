import {getToken, setToken, removeToken} from '@/uitls/auth'


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
    login: {

    },
    getInfo: {

    },
    logout: {

    }


  }

}

export default user
