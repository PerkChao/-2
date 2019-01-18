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
//客户管理/客户列表
const customerlist = () => import('@/components/customermanage/customerlist');
//订单管理 -- 》订单录入
const Orderadd = () => import('@/components/ordermanage/orderadd');
//订单管理 -- 》订单列表
const Orderlist = () => import('@/components/ordermanage/orderlist');
//财务管理 -- 》财务录入
const moneyinput = () => import('@/components/moneymanage/moneyinput');
//财务管理 -- 》财务列表
const moneylist = () => import('@/components/moneymanage/moneylist');
//财务报表 -- 》客户统计
const customerstate = () => import('@/components/financialstate/customerstate');
//财务报表 -- 》销售统计报表
const salestate = () => import('@/components/financialstate/salestate');
//财务报表 -- 》车间统计报表
const workshopstate = () => import('@/components/financialstate/workshopstate');
//系统配置 -- 》系统配置
const systemconfig = () => import('@/components/systemconfig/systemconfig');



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
    },
    {
      path: '/customermanage/customerlist',
      name: 'customerlist',
      component: customerlist,
      meta: {
        title: '客户列表'
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
    {
      path: '/moneymanage/moneyinput',
      name: 'moneyinput',
      component: moneyinput,
      meta: {
        title: '财务录入'
      }
    },
    {
      path: '/moneymanage/moneylist',
      name: 'moneylist',
      component: moneylist,
      meta: {
        title: '财务列表'
      }
    },
    {
      path: '/financialstate/customerstate',
      name: 'customerstate',
      component: customerstate,
      meta: {
        title: '客户统计'
      }
    },
    {
      path: '/financialstate/salestate',
      name: 'customerstate',
      component: salestate,
      meta: {
        title: '销售统计报表'
      }
    },
    {
      path: '/financialstate/workshopstate',
      name: 'customerstate',
      component: workshopstate,
      meta: {
        title: '车间统计报表'
      }
    },
    {
      path: '/systemconfig/systemconfig',
      name: 'systemconfig',
      component: systemconfig,
      meta: {
        title: '系统环境配置'
      }
    },
  ]
})
