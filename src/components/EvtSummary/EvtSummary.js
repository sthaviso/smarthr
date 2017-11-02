import React from 'react'
import { Row, Col, Avatar, Icon } from 'antd'
import PropTypes from 'prop-types'
import styles from './EvtSummary.less'

const ShrinkIcon = ({ open }) => {
  if (open) {
    return (
      <Icon type="shrink" className={styles.icon} />
    )
  }

  return (<div />)
}

const EvtSummary = ({ id, name, transactions, exceptions, currentLI }) => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={4}>
          <Avatar size="small" style={{ backgroundColor: 'black' }} />
          <span className={styles.idLabel}>{id}</span>
        </Col>
        <Col span={8}>{name}</Col>
        <Col span={8} className={styles.txnSum}><span className={styles.txn}>{transactions}</span>&nbsp;/&nbsp;<span className={styles.exceptions}>{exceptions}</span></Col>
        <Col span={4} className={styles.actions}>
          <ShrinkIcon open={id === currentLI.id} />
          <Icon type="file-text"
            className={styles.icon}
            onClick={(event) => { event.stopPropagation() }}
          />
        </Col>
      </Row>
    </div>

  )
}

EvtSummary.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  transactions: PropTypes.number.isRequired,
  exceptions: PropTypes.number.isRequired,
  currentLI: PropTypes.object,
}

export default EvtSummary
