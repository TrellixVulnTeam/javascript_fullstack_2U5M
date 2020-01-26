// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import about from '../components/about'
// 1.通过Vue.use(插件) 安装插件
Vue.use(Router)

// 2、创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home' // 重定向
  },
  {
    path: '/home',
    component: home,

  },
  {
    path: '/about',
    component: about
  }
]

const router = new Router({
  // 配置路由和组件之间的关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 3、将router对象导入vue实例中
export default router