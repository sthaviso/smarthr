import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import styles from './Sider.less'

const { Sider } = Layout

const Header = ({ path, onNavClick, collapsed, onCollapse }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className={styles.sider}
    >
      <div className={styles.logo} />
      <Menu theme="dark" defaultSelectedKeys={[path]} onClick={onNavClick} mode="inline">
        <Menu.Item key="conversations">
          <Icon type="inbox" />
          <span>Conversations</span>
        </Menu.Item>
        <Menu.Item key="users">
          <Icon type="user" />
          <span>Users</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
  onNavClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
}

export default Header
