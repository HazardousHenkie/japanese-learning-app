import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Dashboard from '@/pages/Dashboard.vue'
import routeGuard from '@/Auth/authGuard'

import ROUTES from '@/utils/routes'

const routes: Array<RouteRecordRaw> = [
    {
        path: ROUTES.DASHBOARD,
        name: 'Dashboard',
        beforeEnter: routeGuard,
        component: Dashboard
    },
    {
        path: ROUTES.MY_WORDS,
        name: 'MyWords',
        beforeEnter: routeGuard,
        component: () =>
            import(/* webpackChunkName: "AddWord" */ '@/pages/MyWords.vue')
    },
    {
        path: ROUTES.ADD_WORD,
        name: 'AddWord',
        beforeEnter: routeGuard,
        component: () =>
            import(/* webpackChunkName: "AddWord" */ '@/pages/AddEditWord.vue')
    },
    {
        path: `${ROUTES.EDIT_WORD}/:id`,
        name: 'EditWord',
        beforeEnter: routeGuard,
        component: () =>
            import(/* webpackChunkName: "EditWord" */ '@/pages/AddEditWord.vue')
    },
    {
        path: ROUTES.ABOUT,
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "about" */ '@/pages/About.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () =>
            import(
                /* webpackChunkName: "PageNotFound" */ '@/pages/PageNotFound.vue'
            )
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active bg-gray-900 text-white'
})

export default router
