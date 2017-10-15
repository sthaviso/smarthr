import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Button } from 'antd'
import { Logo } from 'components'
import styles from './Header.less'

const AHeader = Layout.Header

const Header = ({ onLogout }) => {
  return (
    <AHeader>
      <div className={styles.logo}><Logo theme="light" name /></div>
      <div className={styles.logout}><Button icon="logout" shape="circle" size="large" type="danger" onClick={onLogout} /></div>
    </AHeader>
  )
}

Header.propTypes = {
  onLogout: PropTypes.func
}

export default Header
