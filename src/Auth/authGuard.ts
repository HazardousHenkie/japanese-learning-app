import { watchEffect } from 'vue'
import { NavigationGuardWithThis } from 'vue-router'

import { authPlugin } from './index'

const routeGuard: NavigationGuardWithThis<undefined> = (to, from, next) => {
    const { isAuthenticated, loading, loginWithRedirect } = authPlugin

    const verify = () => {
        if (isAuthenticated.value) {
            return next()
        }

        loginWithRedirect({ appState: { targetUrl: to.fullPath } })
    }

    if (!loading.value) {
        return verify()
    }

    watchEffect(() => {
        if (loading.value === false) {
            return verify()
        }
    })
}

export default routeGuard
