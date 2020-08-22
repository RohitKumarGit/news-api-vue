import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/style.scss'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router,
  
  render: h => h(App)
}).$mount('#app')
