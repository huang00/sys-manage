import Vue from 'vue'
import Router from 'vue-router'

import Util from '../libs/util'
import { routers } from './router'
Vue.use(Router)

const router =  new Router({
  routes: routers
})

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title, router.app)
  next()
})

export default router;