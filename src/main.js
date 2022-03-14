import '@/assets/scss/main.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueSvgIcon } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

Vue.config.productionTip = false

Vue.component('SvgIcon', VueSvgIcon)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
