import Vue from 'vue'
import VueRouter from 'vue-router'
import searchApp from './Search.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({ mode: 'history' });

new Vue({
  router,
  render: h => h(searchApp),
}).$mount('#appSearch');
