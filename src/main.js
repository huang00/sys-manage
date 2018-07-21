// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/scss/font-awesome.scss'
import '@/common/common.scss'
import webStorageCache from 'web-storage-cache'
var wsCache = new webStorageCache();

axios.defaults.baseURL = 'api/'
axios.defaults.timeout = 3600000;

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  // wsCache.set('isLogin', true, {exp : 60 * 10});
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
