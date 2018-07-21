import Home from '@/components/Home'

import Web from '@/components/web'
import WebClassify from '@/components/web/classify'
import WebManage from '@/components/web/manage'

import Console from '@/components/console'
import ConsoleAbout from '@/components/console/about'

// import ConsoleDetail from '@/components/console/detail/index'
// import ConsoleDetailOne from '@/components/console/detail/one'
// import ConsoleDetailTwo from '@/components/console/detail/two'

export const page404 = {
    path: '/*',
    name: 'errer-404',
    meta: { title: '404-页面不存在' },
    component: () => import('@/components/errer-page/404'),
}

export const login = {
    path: '/login',
    component: () => import('@/components/Login'),
    name: 'login',
    meta: { title: '登录'}
}

export const routerApp = {
    path: '/',
    component: Home,
    name: 'home',
    meta: { title: '首页' },
    children: [
        {
        path: 'web',
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
        path: 'console',
        component: Console,
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
}

export const routers = [
    login,
    routerApp,
    page404,
]