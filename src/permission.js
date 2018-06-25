import store from './sotre';
import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import { getToken } from '@/utils/auth';
import { Message } from 'element-ui';

const whiteList = ['/login']  // 白名单（不需要权限）


router.beforeEach( (to, from, next) => {
  NProgress.start()
  if(getToken()) { // 有token（合法用户） --用户提交用户信息之后，服务端会返回一个token
    if(to.path == '/login') { // 去登录页面（不需要权限）
      next('/')
    }else { // 其他页面（需要权限）
      if(store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then( res => {
          next()
        }).catch( (err) => {
          store.dispatch('FedLegOut').then( ()=> {
            Message.error(err || '验证失败，请重新登录')
            next('/login')
          })
        })
      }else {
        next()
      }
    }
  }else {
    if( whiteList.indexOf('/login') !==-1 ) { // 去登录页
      next()
    }else { // 其他页面
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

