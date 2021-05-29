import React, { useState } from 'react'
import { Switch, useLocation } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import './BasicLayout.scss'
import Cell from '../components/Cell/index'
import sidebar from '../configs/sidebar'

export const BasicLayout: React.FC = ({ children }) => {
  const { pathname } = useLocation()
  const [isFold, setIsFold] = useState(false)

  return (
    <div className={`blayout${isFold ? ' blayout--fold' : ''}`}>
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
        <div className="blayout-center-header">
          <div
            className="blayout-center-header-fold"
            onClick={() => setIsFold(!isFold)}
          >
            {isFold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>

          <h3 className="blayout-center-header-title">收集箱</h3>

          <div className="blayout-center-header-helpbtn"></div>
        </div>

        <div className="blayout-center-content">
          <Switch>{children}</Switch>
        </div>
      </div>

      <div className="blayout-right">layout right</div>
    </div>
  )
}

export default BasicLayout
