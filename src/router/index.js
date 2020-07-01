import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'
import Edit from '@/views/edit.vue'
import Home from '@/views/Home.vue'
import Article from  '@/views/Article.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name:Home,
      component:Home,
      meta:{
        keepalive:true
      }
    },
  {
    path: '/register',
    name: Register,
    component: Register
  },
  {
    path:'/login',
    name:Login,
    component:Login
  },
  {
    path:'/user',
    name:User,
    component:User,
    meta:{
      istoken:true
    }
  },
  {
    path:'/edit',
    name:Edit,
    component:Edit,
    meta:{
      istoken:true
    }
  },
  {
    path:'/article/:id',
    name:Article,
    component:Article,
   
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) => {
  if((!localStorage.getItem('token') || !localStorage.getItem('id'))&&to.meta.istoken == true){
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})

export default router
