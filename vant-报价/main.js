import Vue from 'vue'
import App from './App'
import https from "./util/https.js"

import interfaces from './util/interfaces.js'

Vue.config.productionTip = false
Vue.prototype.$https = https;
Vue.prototype.$Interface = interfaces
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
