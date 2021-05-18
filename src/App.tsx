import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import routes from './routes'
import { RouteWithSubRoutes } from './utils'

const App: React.FC = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/webapp">WebApp</Link>
        </li>
        <li>
          <Link to="/404">404</Link>
        </li>
      </ul>
    </div>

    <Switch>
      {routes.map((route, index) => (
        <RouteWithSubRoutes key={index} {...route} />
      ))}
    </Switch>
  </Router>
)

export default App
