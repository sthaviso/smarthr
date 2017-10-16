import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs, Row, Col } from 'antd'
import { Users, Title, Integrations } from 'components'
import styles from './index.less'

const TabPane = Tabs.TabPane

const Home = ({ home, loading }) => {
  const { users, apiIntegrations, documentUploads } = home

  function callback (key) {
    console.log(key)
  }

  return (
    <Tabs defaultActiveKey="integrations" onChange={callback}>
      <TabPane tab="Integrations" key="integrations">
        <Title heading="Your Integrations" subheading="Select an API integration or document structure to upload" />
        <div className={styles.integrations}>
          <Tabs defaultActiveKey="api" onChange={callback}>
            <TabPane tab="Api Integration" key="api">
              <Integrations data={apiIntegrations} />
            </TabPane>
            <TabPane tab="Document Upload" key="document">
              <Integrations data={documentUploads} />
            </TabPane>
          </Tabs>
        </div>
      </TabPane>
      <TabPane tab="Smart Contract Logic" key="contracts">Content of Smart Contract Logic tab</TabPane>
      <TabPane tab="Manage Users" key="users">
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
