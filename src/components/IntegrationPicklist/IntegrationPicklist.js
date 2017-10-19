import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Modal, Card } from 'antd'
import { utils } from 'utils'
import { integrations } from 'config'
import styles from './IntegrationPicklist.less'

const IntegrationPicklist = ({ visible, onClose, onSelect }) => {
  const data = Object.keys(integrations).map(key => ({ ...integrations[key], key }))
  return (
    <Modal title={'Select Integration Type'} visible={visible} footer={null}
      className={styles.container} maskClosable={false} width={800} onCancel={onClose}
    >
      <div className={styles.container}>
        {utils.chunk(data, 3, true, { placeholder: true }).map((row, rowIndex) => (
          <Row type="flex" justify="space-around" align="middle" key={rowIndex}>
            {row.map((col, colIndex) => (
              <Col span={7} key={`${rowIndex}_${colIndex}`}>
                { !col.placeholder ? (<Card className={styles.logo_container} onClick={() => { if (onSelect(col.key)) onClose() }}>
                  <div className={styles.logo}><img src={col.logo} alt={col.name} /></div>
                  <p>{col.name}</p>
                </Card>) : '' }
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </Modal>
  )
}

IntegrationPicklist.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default IntegrationPicklist
