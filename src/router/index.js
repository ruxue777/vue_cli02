import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import User from '../views/User.vue'

import UserProfile from '../views/user/UserProfile.vue';
import UserPosts from '../views/user/UserPosts.vue'

import Sidebar from '../views/Sidebar.vue';
import Footer from '../views/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default : Home,
      sidebar : Sidebar,
      footer : Footer
    }
  },
  {
    path: '/list',
    name: 'List',
    props:{
      default : {
        data: '列表'
      }
    },
    components: {
      default : List,
      sidebar : Sidebar,
      footer : Footer
    }
    //component: List
  },{
    path: '/user/:id',
    name: 'User',
    props :true,
    component: User,
    children: [
      {
        path: 'profile',
        component : UserProfile
      },
      {
        path: 'posts',
        component : UserPosts
      }
    ]
  },
  {
    path: '/a',
    //redirect: '/'
    // redirect:{
    //   name: 'List'
    // }
    redirect:()=>{
      if(true){
        //return '/List'
        return {
          name: 'List'
        }
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    components: {
      default : () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      sidebar : Sidebar,
      footer : Footer
    },
    props :{
      default : route => ({
        search : route.query.search
      })
    }
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
