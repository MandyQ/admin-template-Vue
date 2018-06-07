
const app = {
  state: {
    sidebar: {
      open:true
    }

  },
  mutation: {
    TOGGLE_SIDEBAR: state => !state.sidebar.opened

  },
  action: {
    ToggleSidebar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')

    }

  }

}


export default app
