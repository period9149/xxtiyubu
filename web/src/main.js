import Vue from 'vue'
import App from './App.vue'
import './assets/scss/_variables.scss'
import './assets/scss/style.scss'
import router from './router'
import './assets/iconfonts/iconfont.css'

Vue.config.productionTip = false

import axios from 'axios'
import './plugins/element.js'
Vue.prototype.$http = axios.create({
  //baseURL:'http://localhost:3000/web/api'
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
