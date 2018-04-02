import headers from './components/headers.vue'
import home from './components/home.vue'
import gwc from './components/gwc.vue'
import reg from './components/reg.vue'
import login from './components/login.vue'
// import error from './components/error.vue'
import user from './components/user.vue'
import shequ from './components/shequ.vue'
import detail from './components/detail.vue'
import pay from './components/pay.vue'
import address from './components/address.vue'
import merchant from './components/merchant.vue'
import shequjia from './components/shequjia.vue'

//配置路由
let routes=[
  {path:'/headers',component:headers},
  {path:'/home',component:home},
  {path:'/gwc',component:gwc},
  {path:'/reg',component:reg},
  {path:'/login',component:login},
  // {path:'/error',component:error},
  {path:'/user',component:user},
  {path:'/shequ',component:shequ},
  {path:'/detail',component:detail},
  {path:'/pay',component:pay},
  {path:'/address',component:address},
  {path:'/merchant',component:merchant},
  {path:'/shequjia',component:shequjia},
  // {path:'/detail/:aid',component:detail},
  /* {path:'/detail',component:detail,children:[
    {path:':aid',component:detail}
  ]}, */
  {path:'/',redirect:'/home'},//路由跳转
  // {path:'*',component:error}
];

export default {
  routes:routes
};