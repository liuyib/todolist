import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routes from './routes'
import { RouteWithSubRoutes } from './utils/router'

const App: React.FC = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <RouteWithSubRoutes key={index} {...route} />
      ))}
    </Switch>
  </Router>
)

export default App
