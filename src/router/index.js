// Imports
import Vue from 'vue'
import Router from 'vue-router'
import { trailingSlash } from '@/util/helpers'
import {
  layout,
  route,
} from '@/util/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    { path: '', redirect: '/auth' },
    {
      path: '/auth',
      component: () => import(/* webpackChunkName: "Auth" */ '@/layouts/auth/Index'),
      children: [
        {
          path: '',
          component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
        },
      ],
    },
    layout(
      'Default',
      [
        { path: '', redirect: 'home' },
        route('Dashboard', null, 'home'),
        // Pages
        route('UserProfile', null, 'components/profile'),
        // Components
        route('Notifications', null, 'components/notifications'),
        route('Icons', null, 'components/icons'),
        route('Typography', null, 'components/typography'),
        // Tables
        route('Regular Tables', null, 'tables/regular'),
        // Maps
        route('Google Maps', null, 'maps/google'),
        {
          path: 'vehicles',
          component: () => import(/* webpackChunkName: "Vehicles" */ '@/views/Vehicles'),
          children: [
            {
              path: '',
              component: () => import(/* webpackChunkName: "ListVehicles" */ '@/views/ListVehicles'),
            },
            {
              path: 'add',
              component: () => import(/* webpackChunkName: "RegisterVehicle" */ '@/views/RegisterVehicle'),
            },
            {
              path: 'edit/:licencePlate',
              component: () => import(/* webpackChunkName: "EditVehicle" */ '@/views/RegisterVehicle'),
              props: route => ({ licencePlate: route.params.licencePlate }),
            },
          ],
        },
        {
          path: 'owners',
          component: () => import(/* webpackChunkName: "Owners" */ '@/views/Owners'),
          children: [
            {
              path: '',
              component: () => import(/* webpackChunkName: "ListOwners" */ '@/views/ListOwners'),
            },
          ],
        },
        {
          path: 'posts',
          component: () => import(/* webpackChunkName: "Posts" */ '@/views/Posts'),
          children: [
            {
              path: '',
              component: () => import(/* webpackChunkName: "ListPosts" */ '@/views/ListPosts'),
            },
            {
              path: 'add',
              component: () => import(/* webpackChunkName: "RegisterPost" */ '@/views/RegisterPost'),
            },
            {
              path: 'buy/:id',
              component: () => import(/* webpackChunkName: "RegisterBuyDirect" */ '@/views/RegisterBuy'),
              props: route => ({ id: route.params.id }),
            },
            {
              path: 'buy-as-intermediary/:id',
              component: () => import(/* webpackChunkName: "RegisterBuyIntermediary" */ '@/views/RegisterPost'),
              props: route => ({ id: route.params.id }),
            },
          ],
        },
        {
          path: 'users',
          component: () => import(/* webpackChunkName: "Users" */ '@/views/Users'),
        },
      ],
      '/dashboard',
    ),
  ],
})

router.beforeEach((to, from, next) => {
  return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
})

export default router
