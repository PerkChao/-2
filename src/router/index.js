import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

//登陆页
const loginIn = () => import('@/components/login/index');
//登陆
const Login = () => import('@/components/login/Login');
//注册
const Register = () => import('@/components/login/Register');
//工作台
const Workbench = () => import('@/components/home/workbench');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: loginIn,
      children: [
        {
          path: '/',
          name: 'Login',
          component: Login,
          meta: {
            notCache: true
          }
        },
        {
          path: 'register',
          name: 'Register',
          component: Register,
          meta: {
            notCache: true
          }
        },
      ]
    },
    {
      path: '/home/workbench',
      name: 'Workbench',
      component: Workbench,
      meta: {
        title: '工作台'
      }
    },
  ]
})
