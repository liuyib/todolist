import React from 'react'
import { Switch } from 'react-router-dom'
import './BasicLayout.scss'
import Cell from '../components/Cell/index'
import { ContainerOutlined, CalendarOutlined } from '@ant-design/icons'

export const BasicLayout: React.FC = ({ children }) => {
  return (
    <div className="blayout">
      <aside className="blayout-left">
        <ul className="blayout-nav">
          {[
            { title: '收集箱', icon: <ContainerOutlined /> },
            { title: '今天', icon: <CalendarOutlined /> },
          ].map((item, index) => (
            <li key={item.title} className="blayout-nav-item">
              <Cell
                customClass={index === 0 ? 'active' : ''}
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
