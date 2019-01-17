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
//订单管理 -- 》订单录入
const Orderadd = () => import('@/components/ordermanage/orderadd');
//订单管理 -- 》订单列表
const Orderlist = () => import('@/components/ordermanage/orderlist');



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
    {
      path: '/orderadd',
      name: 'Orderadd',
      component: Orderadd,
      meta: {
        title: '订单录入'
      }
    },
    {
      path: '/orderlist',
      name: 'Orderlist',
      component: Orderlist,
      meta: {
        title: '订单列表'
      }
    },
  ]
})
