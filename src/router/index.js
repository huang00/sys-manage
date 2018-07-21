import Vue from 'vue'
import Router from 'vue-router'

import Util from '../libs/util'
import { routers } from './router'
import WebStorageCache from 'web-storage-cache'

const wsCache = new WebStorageCache();
Vue.use(Router)

const router =  new Router({
  routes: routers
})

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title, router.app);
  if (!wsCache.get('userName') && to.name !== 'login') {
    Util.title('登录', router.app);
    next({name: 'login' })
  } else if (wsCache.get('userName') && to.name === 'login') {
    Util.title();
    next({name: 'home'})
  } else {
    next()
  }
  
})

export default router;