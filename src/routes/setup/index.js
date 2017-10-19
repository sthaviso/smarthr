import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Tabs, Button } from 'antd'
import { Users, Title, Integrations, IntegrationPicklist, RestConfig, Contracts } from 'components'
import styles from './index.less'

const TabPane = Tabs.TabPane

const Setup = ({ setup, loading, dispatch }) => {
  const { users, apiIntegrations, documentUploads, modals, contracts } = setup

  function callback (key) {
    console.log(key)
  }

  return (
    <Tabs defaultActiveKey="integrations" onChange={callback}>
      <TabPane tab="Integrations" key="integrations">
        <IntegrationPicklist visible={modals.integrationPicklist}
          onClose={() => { dispatch({ type: 'setup/toggleModal', modals: { integrationPicklist: false } }) }}
          onSelect={(key) => {
            if (key === 'REST') {
              dispatch({ type: 'setup/toggleModal', modals: { restConfig: true } })
              return true
            }

            return false
          }}
        />
        <RestConfig visible={modals.restConfig}
          onClose={() => { dispatch({ type: 'setup/toggleModal', modals: { restConfig: false } }) }}
          onSave={(integration) => {
            dispatch({ type: 'setup/saveApiIntegration', integration })
            return true
          }}
        />
        <Title heading="Your Integrations" subheading="Select an API integration or document structure to upload"
          icon={
            <Button icon={'plus'} type={'primary'} onClick={() => {
              dispatch({ type: 'setup/toggleModal', modals: { integrationPicklist: true } })
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
      <TabPane tab="Smart Contracts" key="contracts">
        <Title heading="Contracts in your organization" subheading="Manage contracts and the associated rules"
          icon={
            <Button icon={'plus'} type={'primary'} onClick={() => {
              dispatch({ type: 'setup/conractAdd' })
            }}
            />}
        />
        <div className={styles.contracts}>
          <Contracts data={contracts.data} selection={contracts.selection}
            onContractSelect={contract => dispatch({ type: 'setup/selectContract', contract })}
            onRuleSelect={console.log}
          />
        </div>
      </TabPane>
      <TabPane tab="Manage Users" key="users">
        <Title heading="Users in your organization" subheading="Add a user by email and they can confirm participation in your org"
          icon={
            <Button icon={'plus'} type={'primary'} onClick={() => {
              dispatch({ type: 'setup/userAdd' })
            }}
            />}
        />
        <Users data={users}
          onDelete={(user) => { dispatch({ type: 'setup/userDelete', user }) }}
          onSave={(user) => { dispatch({ type: 'setup/userSave', user }) }}
        />
      </TabPane>
    </Tabs>
  )
}

Setup.propTypes = {
  setup: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ setup, loading }) => ({ setup, loading }))(Setup)
