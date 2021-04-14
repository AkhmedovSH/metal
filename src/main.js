import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";

import "@/assets/css/bootstrap.css";
import "@/assets/css/styles.css";
import "@/assets/css/types.css";
import "@/assets/css/responsive.css";

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
	created () {
    AOS.init()
  },
	router,
  render: h => h(App),
}).$mount('#app')
