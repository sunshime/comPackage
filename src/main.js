// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import com from '../src/common/js/com'
import VueDND from 'awe-dnd';
Vue.use(VueDND);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  com,
  router,
  components: { App },
  template: '<App/>'
})
