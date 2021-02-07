import ROUTES from '@/utils/routes'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: ROUTES.HOME,
        name: 'Home',
        component: Home
    },
    {
        path: ROUTES.ABOUT,
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active bg-gray-900 text-white'
})

export default router
