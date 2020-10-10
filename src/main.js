import Vue from 'vue'
import App from './App.vue'
import './css/minireset.css'
import './assets/font/style.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
