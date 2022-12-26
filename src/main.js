import Vue from 'vue'
import App from './App.vue'
import { autoAnimatePlugin } from "@formkit/auto-animate/vue"
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import './css/styles.css'
import './css/colors.css'

// Our components
import Home from './components/ContentComponent.vue'

Vue.use(BootstrapVue)
Vue.use(autoAnimatePlugin)
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/projects', component: Home },
  { path: '/hobbies', component: Home },
]

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
