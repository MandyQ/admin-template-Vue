import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../views/layout/Layout';
// import Login from '@/views/login/Login';

import Dashboard from '../views/dashboard'

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect:'/dashboard',
    name:'Layout',
    children:[  //嵌套路由(array)
      {
        path:'dashboard',
        component:Dashboard
      }
    ]
  }

]

export default new Router({
  routes: constantRouterMap,
});
