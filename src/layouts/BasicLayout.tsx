import React from 'react'
import { Switch, useLocation } from 'react-router-dom'
import './BasicLayout.scss'
import Cell from '../components/Cell/index'
import sidebar from '../configs/sidebar'

export const BasicLayout: React.FC = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <div className="blayout">
      <aside className="blayout-left">
        <ul className="blayout-nav">
          {sidebar.map((item) => (
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
