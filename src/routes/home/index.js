import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs, Button } from 'antd'
import { Users, Title, Integrations, IntegrationPicklist } from 'components'
import styles from './index.less'

const TabPane = Tabs.TabPane

const Home = ({ home, loading, dispatch }) => {
  const { users, apiIntegrations, documentUploads, modals } = home

  function callback (key) {
    console.log(key)
  }

  return (
    <Tabs defaultActiveKey="integrations" onChange={callback}>
      <TabPane tab="Integrations" key="integrations">
        <IntegrationPicklist visible={modals.integrationPicklist}
          onClose={() => { dispatch({ type: 'home/toggleModal', modals: { integrationPicklist: false } }) }}
          onSelect={(key) => { console.log(key) }}
        />
        <Title heading="Your Integrations" subheading="Select an API integration or document structure to upload"
          icon={
            <Button icon={'plus'} type={'primary'} onClick={() => {
              dispatch({ type: 'home/toggleModal', modals: { integrationPicklist: true } })
            }}
            />}
        />
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
  home: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ home, loading }) => ({ home, loading }))(Home)
