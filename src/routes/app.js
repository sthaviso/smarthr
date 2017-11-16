import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { withRouter } from 'dva/router'

import { Loader, Sider } from 'components'
import { Layout } from 'antd'

const { Content } = Layout

const App = ({ children, location, loading, dispatch, app }) => {
  const { pathname } = location
  const { collapsed } = app
  const showHeader = pathname !== '/login'

  function onLogout () {
    dispatch({ type: 'app/logout' })
  }

  function onNavigate ({ key }) {
    dispatch({ type: 'app/navigate', pathname: key })
  }

  function onCollapse () {
    dispatch({ type: 'app/collapse' })
  }

  return (
    <Layout style={{ minHeight: '100vh', flexDirection: 'row' }}>
      {showHeader ? (<Sider onLogout={onLogout} path={pathname} onNavClick={onNavigate} collapsed={collapsed} onCollapse={onCollapse} />) : ''}
      <Layout>
        <Loader fullScreen spinning={loading.global} />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
