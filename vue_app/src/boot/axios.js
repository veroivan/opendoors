import Vue from 'vue'
import axios from 'axios'
import VueAxios from "vue-axios"

//Vue.prototype.$axios = axios
console.log('BACKEND_URL', process.env.VUE_APP_BACKEND_URL)
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL

Vue.use(VueAxios, axios)
