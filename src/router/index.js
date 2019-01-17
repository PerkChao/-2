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
//产品管理/产品列表
const Prolist = () => import('@/components/proManage/prolist');
//采购商品管理/产品列表
const buylist = () => import('@/components/buymanage/buylist');
//客户管理/客户信息录入
const customerinput = () => import('@/components/customermanage/customerinput');
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
      path: '/proManage/Prolist',
      name: 'Prolist',
      component: Prolist,
      meta: {
        title: '产品列表'
      }
    },
    {
      path: '/buymanage/buylist',
      name: 'buylist',
      component: buylist,
      meta: {
        title: '商品列表'
      }
    },
    {
      path: '/customermanage/customerinput',
      name: 'customerinput',
      component: customerinput,
      meta: {
        title: '客户信息录入'
      }
    },{
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
