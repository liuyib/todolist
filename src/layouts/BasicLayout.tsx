import React from 'react'
import { Switch } from 'react-router-dom'
import './BasicLayout.scss'

export const BasicLayout: React.FC = ({ children }) => {
  return (
    <div className="blayout">
      <aside className="blayout-left">left</aside>

      <div className="blayout-center">
        <Switch>{children}</Switch>
      </div>
    </div>
  )
}

export default BasicLayout
