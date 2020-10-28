import Vue from 'vue'
import appSlider from './Slider.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(appSlider),
}).$mount('#appSlider');
