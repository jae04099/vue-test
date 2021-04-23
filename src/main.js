import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueGallery from 'vue-gallery'
import { store } from './store/store';


Vue.config.productionTip = false

new Vue({
  VueGallery,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
