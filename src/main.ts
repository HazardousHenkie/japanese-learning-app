import { createApp } from 'vue'
import App from './containers/App/App.vue'
import router from './router'
import store from './store'

import './styles/index.scss'
// import './styles/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import icons from './utils/icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(icons)

createApp(App)
    .use(store)
    .use(router)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
