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
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/web',
      component: Web,
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
      path: '/console',
      component: Console,
      meta: { title: '控制台'},
      children: [
        { path: '/', redirect: 'about' },
        {
          path: 'about',
          component: ConsoleAbout,
          name: 'about',
          meta: { title: '关于' }
        },
        {
          path: 'detail',
          component: ConsoleDetail,
          meta: { title: '详情' },
          children: [
            { path: '/', redirect: { name: 'one' } },
            {
              path: 'one',
              name: 'one',
              component: ConsoleDetailOne,
              meta: { title: '模块一' }
            },
            {
              path: 'two',
              name: 'two',
              component: ConsoleDetailTwo,
              meta: { title: '模块二' }
            }
          ]
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})
