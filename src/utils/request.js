import axios from 'axios';

// 创建axios实例， 设置配置的默认值
var service = axios.create({
  baseURL:process.env.BASE_URL, //(nodejs)process.env属性返回一个包含用户环境信息的对象
  timeout:5000
})

//拦截器：在请求或响应被 then 或 catch 处理前拦截它们
//请求拦截器
axios.interceptors.request.use(config => {
  if(store.getters.token) {
    config.headers['x-Token'] = getToken()  //让请求携带自定义token
  }
  return config;
},error => {
  console.log(error)
  return Promise.reject(error);
})

//响应拦截器
axios.interceptors.response.use(response => {
  let res = response.data;
  if(!res.code ===20000){


  }


  //code为非20000是抛错 可结合自己业务进行修改

 // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
})


