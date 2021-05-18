import React from 'react'
import { Switch } from 'react-router-dom'
import './BasicLayout.scss'

export const BasicLayout: React.FC = ({ children }) => {
  return (
    <div className="wrapper">
      <header className="header">header</header>

      <aside className="sidebar">sidebar</aside>

      <main className="content">
        <Switch>{children}</Switch>
      </main>

      <footer className="footer">footer</footer>
    </div>
  )
}

export default BasicLayout
