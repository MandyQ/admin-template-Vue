import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'


// 全局注册组件
Vue.component('svg-icon', SvgIcon)

const importAll = r => {
  r.keys().map(r)
}

// const importAll = requireContext => requireContext.keys().map(requireContext)

importAll(require.context('./svg', false, /\.svg$/))  //去components文件夹下（不包括子目录）找.js结尾的文件

