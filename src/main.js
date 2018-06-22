// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 导入axios
// import axios from 'axios';
// axios.defaults.baseURL = BASE_URL;
//把axios添加到vue的原型上
// Vue.prototype.$http = axios;

import 'normalize.css/normalize.css';
import '@/static/styles/index.css';

import App from './App';

import router from './router';
import store from './store';

import '@/icons'


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
