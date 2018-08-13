import axios from 'axios';
import store from '../store';

// 创建axios实例， 设置配置的默认值
var service = axios.create({
  baseURL:process.env.BASE_URL, //(nodejs)process.env属性返回一个包含用户环境信息的对象
  timeout:5000
})

//拦截器：在请求或响应被 then 或 catch 处理前拦截它们
//请求拦截器
axios.interceptors.request.use(config => {
  console.log(config,'--------------')
  if(store.getters.token) {
    config.headers['x-Token'] = getToken()  //让请求携带自定义token
  }
  console.log(config,'--------------')
  return config;
},error => {
  console.log(error)
  return Promise.reject(error);
})

//响应拦截器
axios.interceptors.response.use(res => {
   //code为非20000是抛错
  if( res.code !== 20000 ){
    Message({
      message:res.message,
      type:'error',
      duration: 5 * 1000
    })
  }
 // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  if( res.code==50008 || res.code == 50012 || res.code == 50014 ) {
    MessageBox.comfirm('你已被登出，可以取消继续留在该页面，或者重新登录','确定登出', {
      confirmButtonText:'确定',
      cancelButtonText:'取消',
      type:'warning',
    }).then( () => { //确定登出
      store.dispatch('FedLogout').then( ()=> {
        location.reload() //重新实例化vue-router对象
          //（vue-router跳转的是相同的地址的时候，是不会刷新页面的，刷新页面的方法：
          //1.location.reload
          // 2.去掉mode:'history'
          // 3.把router-link换成a标签）
      })
    }).catch( () =>
      Message({
        type:'info',
        message:'已取消登出'
      })
    )
  }
})
export default service


