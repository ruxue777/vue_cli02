import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import User from '../views/User.vue'

import UserProfile from '../views/user/UserProfile.vue';
import UserPosts from '../views/user/UserPosts.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },{
    path: '/user/:id',
    name: 'User',
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
  // {
  //   path: '/user-*',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
