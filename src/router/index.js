import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import MainIndex from '@/components/MainIndex'

Vue.use(Router)


const routes = [
    {
      path: '/',
      name: 'MainIndex',
      component: MainIndex,
      children:[
        // {
        //   path : "/GoodsDetail",
        //   name : "GoodsDetail",
        //   component : resolve => require(['@/components/GoodsDetail.vue'], resolve),
        // },
      ]
    },
    {
      path : "/GoodsDetail",
      name : "GoodsDetail",
      component : resolve => require(['@/components/GoodsDetail.vue'], resolve),
    },
    {
      path : "/FeedBack",
      name : "FeedBack",
      component : resolve => require(['@/components/FeedBack.vue'], resolve),
    },
    {
      path : "/Login",
      name : "Login",
      component : Login
    },
    {
      path:"/Register",
      name:"Register",
      component:Register 
    }
  ]


const router = new Router({
  mode:'hash',
  routes:routes
})


export default router
