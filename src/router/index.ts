import ROUTES from '@/utils/routes'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '../views/Dashboard/index.vue'

import routeGuard from '../components/templates/Auth/authGuard'

const routes: Array<RouteRecordRaw> = [
    {
        path: ROUTES.DASHBOARD,
        name: 'Dashboard',
        beforeEnter: routeGuard,
        component: Dashboard
    },
    {
        path: ROUTES.ADD_WORD,
        name: 'AddWord',
        component: () =>
            import(
                /* webpackChunkName: "AddWord" */ '../views/AddWord/index.vue'
            )
    },
    {
        path: ROUTES.ABOUT,
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active bg-gray-900 text-white'
})

export default router
