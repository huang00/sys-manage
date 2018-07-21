import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'

import Web from '@/components/web'
import WebClassify from '@/components/web/classify'
import WebManage from '@/components/web/manage'

import Console from '@/components/console'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ConsoleAbout from '@/components/console/about'
import ConsoleDetail from '@/components/console/detail/index'
import ConsoleDetailOne from '@/components/console/detail/one'
import ConsoleDetailTwo from '@/components/console/detail/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      meta: { title: '首页' },
      children: [
        {
          path: 'web',
          component: Web,
          name: 'web',
          meta: {title: '网站'},
          children: [
            { path: '/', redirect: {name: 'classify'} },
            {
              path: 'classify',
              name: 'classify',
              component: WebClassify,
              meta: { title: '文章分类' }
            },
            {
              path: 'manage',
              name: 'manage',
              component: WebManage,
              meta: { title: '文章管理' }
            }
          ]
        },
        {
          path: 'console',
          component: Console,
          name: 'console',
          meta: { title: '控制台'},
          children: [
            { path: '/', redirect: {name: 'about'} },
            {
              path: 'about',
              component: ConsoleAbout,
              name: 'about',
              meta: { title: '关于' }
            },
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: { title: '登录'}
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})
