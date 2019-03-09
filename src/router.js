import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import comment from './views/comment.vue'
import friend from './views/friend.vue'
import time from './views/time.vue'
import me from './views/me.vue'
import read from './views/read.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    },
    {
      path: '/time',
      name: 'time',
      component: time
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/read',
      name: 'read',
      component: read
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
