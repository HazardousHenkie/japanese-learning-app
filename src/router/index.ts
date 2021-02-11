import ROUTES from '@/utils/routes'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

import routeGuard from '../components/templates/Auth/authGuard'

const routes: Array<RouteRecordRaw> = [
    {
        path: ROUTES.HOME,
        name: 'Home',
        component: Home
    },
    {
        path: ROUTES.DASHBOARD,
        name: 'Dashboard',
        beforeEnter: routeGuard,
        component: () =>
            import(/* webpackChunkName: "profile" */ '../views/Dashboard.vue')
    },
    {
        path: ROUTES.ABOUT,
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active bg-gray-900 text-white'
})

export default router
