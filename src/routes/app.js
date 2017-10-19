import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { withRouter } from 'dva/router'

import { Loader, Header } from 'components'
import { Layout } from 'antd'

const { Content, Footer } = Layout

const App = ({ children, location, loading, dispatch }) => {
  const { pathname } = location
  const showHeader = pathname !== '/login'

  function onLogout () {
    dispatch({ type: 'app/logout' })
  }

  function onNavigate ({ key }) {
    dispatch({ type: 'app/navigate', pathname: key })
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {showHeader ? (<Header onLogout={onLogout} path={pathname} onNavClick={onNavigate} />) : ''}
      <Content>
        <Loader fullScreen spinning={loading.global} />
        <Layout style={{ margin: '50px auto', maxWidth: '1600px' }}>
          <Content>{children}</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center', bottom: '0px', background: '#f7f7f7' }}>SupplyLinc Inc., &copy; 2017</Footer>
    </Layout>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
