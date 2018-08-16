/* eslint-disable */

import Vue from 'vue';
import Router from 'vue-router';

// 导入自定义组件
import Layout from '@/views/layout/Layout';
import Login from '@/views/login/Login';
import Dashboard from '@/views/dashboard';
import Table from '@/views/table';
import Tree from '@/views/tree';
import Integration from '@/views/integration';
import Errpage from '@/views/404';

Vue.use(Router);


// 路由表
// 如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  { path: '/login', component: Login },
  { path: '/404', component: Errpage },

  {
    path: '', //默认hash模式 在localhost:8080/#/运行，故path这里不加 /
    component: Layout,
    redirect: 'dashboard',
    name: 'Dashboard', // 显示在面包屑导航的名称 (用于keep-alive & router-view缓存)
    // hidden：true,
    meta: { title: 'Dashboard' },
    children:[ // 嵌套路由(array)
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {title: 'Dashboard',icon:'dashboard'}
      }
    ]
  },
  {
    path:'/example',
    component:Layout,
    redirect:'/example/table',  // '/xx'是根路径
    name:'Example',
    meta: {title: 'Example', icon:'example'},
    children:[
      {
        path:'table',
        component: Table,
        name:'Table',
        meta: {title: 'Table', icon:'table'}
      },
      {
        path:'tree',
        component: Tree,
        name:'Tree',
        meta: {title: 'Tree', icon:'tree'}
      }
    ]
  },
  {
    path:'/integration',
    component: Layout,
    meta: { title: 'Integration', icon: 'integration' },
    children: [
      {
        path: 'index',
        component:Integration,
        name:'Integration',
        meta: {title: 'Integration', icon:'integration'}
      }
    ]
  },
  { path: '*', redirect: '/404' },

]

// 实例化vue的时候只挂载constantRouterMap
export default new Router({
  scrollBehavior: ()=>({y:0}),
  routes: constantRouterMap,
});

//异步挂载的路由，
//动态需要根据权限加载的路由表（此处放在前端，也可以放在后端）
export const asyncRouterMap = [

]
