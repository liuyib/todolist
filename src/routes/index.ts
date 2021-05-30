import React from 'react'
import BasicLayout from '../layouts/BasicLayout'
import NotFound from '../pages/404'
import Home from '../pages/Home'
import Inbox from '../pages/Inbox'
import Today from '../pages/Today'

export interface IRoute {
  path: string
  exact?: boolean
  redirect?: string
  component?: React.FC
  children?: IRoute[]
}

const routes = [
  {
    path: '/',
    exact: true,
    redirect: `/${process.env.NODE_ENV === 'development' ? 'webapp' : ''}`,
    component: Home,
  },
  {
    // FIXME: /webapp 路由应该自动重定向到 /webapp/inbox
    path: '/webapp',
    component: BasicLayout,
    children: [
      {
        path: '/webapp/inbox',
        component: Inbox,
      },
      {
        path: '/webapp/today',
        component: Today,
      },
    ],
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404',
  },
]

export default routes
