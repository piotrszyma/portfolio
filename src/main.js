import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router';
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueAnalytics, {
  id: 'UA-39841612-2',
  router,
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
