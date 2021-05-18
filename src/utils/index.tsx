import { Route, Redirect } from 'react-router-dom'
import { IRoute } from '../routes'

/**
 * 根据配置递归渲染路由
 * @param route - 路由配置项
 * @returns 路由组件
 */
export const RouteWithSubRoutes = (route: IRoute) => {
  return (
    <Route path={route.path} exact={!!route.exact}>
      {route.redirect && <Redirect to={route.redirect} />}

      {route.component ? (
        <route.component>
          {route.children &&
            route.children.map((child, index) => {
              return <RouteWithSubRoutes key={index} {...child} />
            })}
        </route.component>
      ) : (
        route.children &&
        route.children.map((child, index) => {
          return <RouteWithSubRoutes key={index} {...child} />
        })
      )}
    </Route>
  )
}
