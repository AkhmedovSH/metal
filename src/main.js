import Vue from 'vue'
import App from './App.vue'
// Vue Router
import router from "./router/index";


import "@/assets/css/bootstrap.css";
import "@/assets/css/styles.css";
import "@/assets/css/types.css";
import "@/assets/css/responsive.css";
Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
