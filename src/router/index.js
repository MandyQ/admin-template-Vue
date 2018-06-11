import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 导入自定义组件
import Layout from '../views/layout/Layout';
// import Login from '@/views/login/Login';
import Dashboard from '../views/dashboard';
import Table from '../views/table';
import Tree from '../views/tree';
import Form from '../views/form';




// 路由表
// 如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect:'/dashboard',
    name:'Dashboard', //显示在面包屑导航的名称
    // hidden：true,
    children:[  //嵌套路由(array)
      {
        path:'dashboard',
        component:Dashboard
      }
    ]
  },
  {
    path:'/example',
    component:Layout,
     redirect:'/example/table',
    name:'Table',
    children:[
      {
        path:'table',
        component: Table,
      },
      {
        path:'tree',
        component: Tree
      }
    ]
  },
  {
    path:'/form',
    component: Layout,
    children: [
      {
        path: 'index',
        component:Form
      }
    ]
  }

]

// 实例化vue的时候只挂载constantRouterMap
export default new Router({
  routes: constantRouterMap,
});
