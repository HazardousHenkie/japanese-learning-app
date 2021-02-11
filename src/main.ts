import { createApp } from 'vue'
import App from './containers/App/App.vue'
import router from './router'
import store from './store'
import setupAuth from './components/templates/Auth'

import './styles/index.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import icons from './utils/icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ROUTES from './utils/routes'
import { RedirectLoginResult } from '@auth0/auth0-spa-js'

const app = createApp(App)
    .use(store)
    .use(router)
    .component('FontAwesomeIcon', FontAwesomeIcon)

library.add(icons)

const callbackRedirect = (appState: RedirectLoginResult['appState']) => {
    router.push(
        appState && appState.targetUrl ? appState.targetUrl : ROUTES.DASHBOARD
    )
}

setupAuth(callbackRedirect, {}).then(auth => {
    app.use(auth).mount('#app')
})
