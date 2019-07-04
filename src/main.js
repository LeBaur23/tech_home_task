// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// styles
import 'bootstrap-4-grid/css/grid.css'
import './assets/style/style.scss'
import 'styles/variables.scss'

// components
import CHOCO_ICONS from './components/choco-icons.vue'
import BACK_BUTTON from './components/back_button.vue'
Vue.component('chocomart-icon', CHOCO_ICONS)
Vue.component('back_button', BACK_BUTTON)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
