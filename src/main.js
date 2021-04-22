import Vue from 'vue'
import App from './App.vue'
import router from './router'
// global css
import './assets/application.css'
// reset.css
import './assets/reset.css'
// import fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import store

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
