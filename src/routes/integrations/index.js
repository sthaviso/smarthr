import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Tabs } from 'antd'
import { Title, IntegrationPicklist, Integrations, RestConfig, TemplatePicklist } from 'components'
import styles from './index.less'

const TabPane = Tabs.TabPane

const IntegrationsHub = ({ integrations, dispatch }) => {
  const { apiIntegrations, documentUploads, modals, template } = integrations
  function callback (key) {
    console.log(key)
  }

  return (
    <div className={styles.container}>
      <IntegrationPicklist visible={modals.integrationPicklist}
        onClose={() => { dispatch({ type: 'integrations/toggleModal', modals: { integrationPicklist: false } }) }}
        onSelect={(key) => {
          if (key === 'REST') {
            dispatch({ type: 'integrations/toggleModal', modals: { restConfig: true } })
            return true
          }

          return false
        }}
      />
      <RestConfig visible={modals.restConfig}
        onClose={() => { dispatch({ type: 'integrations/toggleModal', modals: { restConfig: false } }) }}
        onSave={(integration) => {
          dispatch({ type: 'integrations/saveApiIntegration', integration })
          return true
        }}
      />
      <TemplatePicklist visible={modals.templatePicklist}
        onClose={() => { dispatch({ type: 'integrations/toggleModal', modals: { templatePicklist: false } }) }}
        onSelect={(t) => {
          dispatch({ type: 'integrations/saveTemplate', template: t })
          return true
        }}
      />
      <Title heading="Your Integrations" subheading="Select an API integration or document structure to upload"
        icon={
          <Button icon={'plus'} type={'primary'} onClick={() => {
            dispatch({ type: 'integrations/toggleModal',
              modals: {
                integrationPicklist: !!template,
                templatePicklist: !template,
              },
            })
          }}
          />}
      />
      <div className={styles.integrations}>
        <Tabs defaultActiveKey="templates" onChange={callback}>
          <TabPane tab="Templates" key="templates">
            <Integrations type={'template'} data={template ? template.integrations : []}
              onSelect={(integration) => {
                if (integration.type === 'REST') {
                  dispatch({ type: 'integrations/toggleModal', modals: { restConfig: true } })
                  return true
                }

                return false
              }}
            />
          </TabPane>
          <TabPane tab="Api Integration" key="api">
            <Integrations data={apiIntegrations} />
          </TabPane>
          <TabPane tab="Document Upload" key="document">
            <Integrations data={documentUploads} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

IntegrationsHub.propTypes = {
  integrations: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ integrations, loading }) => ({ integrations, loading }))(IntegrationsHub)
