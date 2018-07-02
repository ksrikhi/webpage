// The Vue build version to load with the `import` command
// (runtime-only or standalone) has beeimport Vue from 'vue'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)
let app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

app.$mount()
