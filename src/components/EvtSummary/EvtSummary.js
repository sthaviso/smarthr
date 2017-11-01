import React from 'react'
import { Row, Col, Avatar, Icon } from 'antd'
import PropTypes from 'prop-types'
import styles from './EvtSummary.less'

const EvtSummary = ({ id, name, count, transactions, exceptions, actions }) => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={4}>
          <Avatar size="small" style={{ backgroundColor: 'black' }} />
          <span style={{ paddingLeft: '10px', verticalAlign: 'top', lineHeight: '24px', fontSize: '16px' }}>{id}</span>
        </Col>
        <Col span={8}>{name}</Col>
        <Col span={8} className={styles.txnSum}><span className={styles.txn}>{transactions}</span>&nbsp;/&nbsp;<span className={styles.exceptions}>{exceptions}</span></Col>
        <Col span={4} className={styles.actions}>
          <Icon type="shrink" className={styles.icon} />
          <Icon type="file-text" className={styles.icon} />
        </Col>
      </Row>
    </div>

  )
}

EvtSummary.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  transactions: PropTypes.number.isRequired,
  exceptions: PropTypes.number.isRequired,
  actions: PropTypes.object,
}

export default EvtSummary
