import store from '@/store'

const { body }  = document
const WIDTH = 1024
const RATIO = 3

export default {
  watch: { //watch中监听的对象默认回掉函数中的参数值就是newVal, oldVal
    $route() {
      if(this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('CloseSideBar', { withoutAnimation: false})
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobile()
    if(isMobile) {
      store.dispatch('ToggleDevice', 'mobile')
      store.dispatch('CloseSideBar', {withoutAnimation: false})
    }
  },
  methods: {
    isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    resizeHandler() {
      if(!document.hidden) {//页面可见
        const isMobile =this.isMobile()
        store.dispatch('ToggleDevice', isMobile ? 'mobile' : 'desktop')

        if( isMobile ) {
          store.dispatch('CloseSideBar', { withoutAnimation : false})
        }
      }
    }
  }


}

