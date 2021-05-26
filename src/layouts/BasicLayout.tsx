import React from 'react'
import { Switch, useLocation } from 'react-router-dom'
import './BasicLayout.scss'
import Cell from '../components/Cell/index'
import { ContainerOutlined, CalendarOutlined } from '@ant-design/icons'

export const BasicLayout: React.FC = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <div className="blayout">
      <aside className="blayout-left">
        <ul className="blayout-nav">
          {[
            {
              title: '收集箱',
              link: '/webapp/inbox',
              icon: <ContainerOutlined />,
            },
            {
              title: '今天',
              link: '/webapp/today',
              icon: <CalendarOutlined />,
            },
          ].map((item) => (
            <li key={item.title} className="blayout-nav-item">
              <Cell
                customClass={pathname === item.link ? 'active' : ''}
                link={item.link}
                before={item.icon}
                title={item.title}
              />
            </li>
          ))}
        </ul>
      </aside>

      <div className="blayout-center">
        <Switch>{children}</Switch>
      </div>
    </div>
  )
}

export default BasicLayout
