import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, routerRedux, Redirect } from 'dva/router'
import dynamic from 'dva/dynamic'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import App from './routes/app'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })
  const routes = [{
    path: '/conversations',
    models: () => [import('./models/conversations')],
    component: () => import('./routes/conversations/'),
  },
  {
    path: '/login',
    models: () => [import('./models/login')],
    component: () => import('./routes/login/'),
  },
  {
    path: '/users',
    models: () => [import('./models/users')],
    component: () => import('./routes/users/'),
  },

  ]

  return (
    <LocaleProvider locale={enUS}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/conversations" />)} />
            {
              routes.map(({ path, ...dynamics }, key) => (
                <Route key={key}
                  exact
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics,
                  })}
                />
              ))
            }
            <Route component={error} />
          </Switch>
        </App>
      </ConnectedRouter>
    </LocaleProvider>
  )
}


Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
