import Vue from 'vue';
import axios from 'axios';
import router from '../router';
import store from '../store/store';
import config from '../config';
import { LoadingBar, Message } from 'iview';

let hostName;
let basicUrl;
const isProdMode = Object.is(process.env.NODE_ENV, 'production'); // 确定两个值是否是相同的值。

//host配置
if (location.hostname == 'localhost') {
  hostName = process.env.API_PATH_DEV;
  basicUrl = isProdMode ? config.inUrl+'/api' : '/api';
}else if (location.hostname == '59.110.243.25') {
  hostName = process.env.API_PATH_IN;
  basicUrl = config.inUrl
}
console.log(hostName, basicUrl);

const service2 = axios.create({
  baseURL: basicUrl, // api的base_url
  timeout: 50000,    // 请求超时时间
  headers: {'Content-Type': 'application/json'},
  withCredentials: true // 所有请求携带cookie进行账号校验
});

Vue.prototype.$http = service2;
Vue.config.productionTip = false;

// http请求拦截器
service2.interceptors.request.use(config => {
  console.log('发起请求');
  LoadingBar.start();
  //把携带token的头部设置放在axios的请求拦截器里，
  //每次请求都重新获取以便拿到最新的登陆态，这里有个坑就是在请求拦截器里设置头部要用自定义设置，
  //而不能用axios.defaults.headers默认设置
  if (!!localStorage.getItem('LOGIN_TOKEN')) {
    let LOGIN_TOKEN;
    LOGIN_TOKEN = 'bearer ' + JSON.parse(localStorage.getItem('LOGIN_TOKEN')).access_token;
    config.headers['Authorization'] = LOGIN_TOKEN
  }
  return config
}, error => {
  console.log('请求失败')
  LoadingBar.finish();
  if (error) {}
  return Promise.reject(error)
});

// http响应拦截器
service2.interceptors.response.use(data => {
  LoadingBar.finish();
  if (data.data.code === 700) {
    console.log('响应成功, 未登录');
    router.push({ name: "Login" })
  }else if (data.data.code !== 200) {
    console.log('响应成功, 请求出错');
    Message.error({
      content: data.data.msg,
      top: 100,
      duration: 3
    })
  }else  {
    console.log('响应成功, 请求完成');
    return data
  }
}, error => {
  console.log('响应失败')
  LoadingBar.finish();
  if (error.response.status == 401) {

  }
  return Promise.reject(error)
});


export default service2;

LoadingBar.config({
  color: '#5cb85c',
  failedColor: '#f0ad4e',
  height: 3
});
