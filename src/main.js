import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import instance from '@/plugins/axios.js'
import 'toastify-js/src/toastify.css'
import toastify from 'toastify-js'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://proguardpeercover.herokuapp.com'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.prototype.$axios = instance
Vue.prototype.$toastify = toastify

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
