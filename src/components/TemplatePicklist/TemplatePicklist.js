import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Modal } from 'antd'
import { integrations } from 'config'
import styles from './TemplatePicklist.less'

const data = [{
  name: 'Product Traceability',
  description: 'To understand your products journery from genesis to completion. Integrate with your GIS and SCM integrations along with leading cloud providers.',
  image: '/img/tracetemplate.svg',
  integrations: [{
    ...integrations.ORACLE,
    type: 'ORACLE',
  }, {
    ...integrations.TRUCKTRACK,
    type: 'TRUCKTRACK',
  }, {
    ...integrations.REST,
    type: 'REST',
  }],
}, {
  name: 'Pharmaceutical Serial Tracking',
  description: 'Tackle pharma tracking with our native integrations with leading SCM vendors.',
  image: '/img/pharmatemplate.svg',
  integrations: [{
    ...integrations.SAP,
    type: 'SAP',
  }, {
    ...integrations.TRUCKTRACK,
    type: 'TRUCKTRACK',
  }, {
    ...integrations.REST,
    type: 'REST',
  }],
}, {
  name: 'Cold Chain Monitoring',
  description: 'Track refrigerated goods using a combination of integrations with Avery Dennison and your SCM software.',
  image: '/img/coldchaintemplate.svg',
  integrations: [{
    ...integrations.ORACLE,
    type: 'ORACLE',
  }, {
    ...integrations.TTSENSOR,
    type: 'REST',
  }, {
    ...integrations.TRUCKTRACK,
    type: 'TRUCKTRACK',
  }, {
    ...integrations.REST,
    type: 'REST',
  }],
}]

const TemplatePicklist = ({ visible, onClose, onSelect }) => {
  return (
    <Modal title={'Select an Integration Template'} visible={visible} footer={null}
      className={styles.container} maskClosable={false} width={800} onCancel={onClose}
    >
      <div className={styles.container}>
        {data.map((template, rowIndex) => (
          <Row key={rowIndex}>
            <Col span={20} offset={2}>
              <Card className={styles.template} onClick={() => { if (onSelect(template)) onClose() }}>
                <Row>
                  <Col span={8} className={styles.templateimgcontainer}><img src={template.image} alt={template.name} /></Col>
                  <Col span={14} offset={2}>
                    <h3 className={styles.templatename}>{template.name}</h3>
                    <p>{template.description}</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ))}
        {!data.length ? <div className={styles.messagecontainer}><div className={styles.message}>No {type}s found.</div></div> : '' }
      </div>
    </Modal>
  )
}

TemplatePicklist.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default TemplatePicklist
