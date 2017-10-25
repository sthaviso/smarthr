import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Button, Menu } from 'antd'
import { Logo } from 'components'
import styles from './Header.less'

const Header = ({ onLogout, path, onNavClick }) => {
  return (
    <Layout.Header>
      <div className={styles.logo}><Logo theme="light" name /></div>
      <Menu theme={'dark'} mode={'horizontal'} style={{ lineHeight: '64px' }}
        defaultSelectedKeys={[path]} onClick={onNavClick} className={styles.menu}
      >
        <Menu.Item key={'/overview'}>Overview</Menu.Item>
        <Menu.Item key={'/transactions'}>Transactions</Menu.Item>
        <Menu.Item key={'/smartcontracts'}>Smart Contracts</Menu.Item>
        <Menu.Item key={'/setup'}>Setup</Menu.Item>
      </Menu>
      <div className={styles.logout}><Button icon="logout" shape="circle" size="large" type="danger" onClick={onLogout} /></div>
    </Layout.Header>
  )
}

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  onNavClick: PropTypes.func.isRequired,
}

export default Header
