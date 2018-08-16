/* eslint-disable */
import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),  // 侧边栏 默认半收缩
      withoutAnimation:false
    },
    device:'desktop'
  },
  mutations: { //同步方法  直接更改state
    TOGGLE_SIDEBAR: state => {
      if(state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1) // 半收缩（图标可见）/ 完全收缩 1
      } else {
        Cookies.set('sidebarStatus', 0) //完全展开 0
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus',1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation

    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    }
  },
  actions: { //异步 提交mutations来修改state
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    }
  }
}


export default app
