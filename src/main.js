import Vue from 'vue'
import App from './App.vue'
import ccUI from './packages/index';
Vue.config.productionTip = false

Vue.use(ccUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
