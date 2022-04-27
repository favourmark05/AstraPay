import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import dashBoard from '../components/DashBoard/dashBoard.vue'
import createMarketers from '../components/DashBoard/createMarketers.vue'
import editMarketers from '../components/DashBoard/editMarketers.vue'
import marketerInfo from '../components/DashBoard/marketerInfo.vue'
// import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashBoard',
    name: 'DashBoard',
    component: dashBoard,
    meta: { requiresAuth: true },
    // beforeEnter: (to, from, next) => {
    //   if (store.state.authenticated === false) {
    //     next(false)
    //   } else {
    //     next()
    //   }
    // },
    children: [
      {
        path: '/createMarketers',
        name: 'CreateMarketers',
        component: createMarketers
      },
      {
        path: '/editMarketers',
        name: 'editMarketers',
        component: editMarketers
      },
      {
        path: '/marketerInfo/:marketing_consultant_id',
        name: 'marketerInfo',
        component: marketerInfo
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
