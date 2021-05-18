import React from 'react'
import BasicLayout from '../layouts/BasicLayout'
import NotFound from '../pages/404'
import Home from '../pages/Home'
import Inbox from '../pages/Inbox'

export interface IRoute {
  path: string
  exact?: boolean
  redirect?: string
  component?: React.FC
  children?: Array<IRoute>
}

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/webapp',
    redirect: '/webapp/inbox',
    component: BasicLayout,
    children: [
      {
        path: '/webapp/inbox',
        component: Inbox,
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
