import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs, Row, Col } from 'antd'
import { Users, Title } from 'components'
import styles from './index.less'

const TabPane = Tabs.TabPane

const Home = ({ home, loading }) => {
  const { users } = home

  function callback (key) {
    console.log(key)
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Integrations" key="1">Content of Integrations tab</TabPane>
      <TabPane tab="Smart Contract Logic" key="2">Content of Smart Contract Logic tab</TabPane>
      <TabPane tab="Manage Users" key="3">
        <Title heading="Users in your organization" subheading="Add a user by email and they can confirm participation in your org" />
        <Users data={users} />
      </TabPane>
    </Tabs>
  )
}

Home.propTypes = {
  loading: PropTypes.object,
}

export default connect(({ home, loading }) => ({ home, loading }))(Home)
