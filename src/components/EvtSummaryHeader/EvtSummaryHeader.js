import React from 'react'
import { Row, Col } from 'antd'
import styles from './EvtSummaryHeader.less'

const EvtSummaryHeader = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={4}>SENSOR</Col>
        <Col span={8}>ASSOCIATED USER </Col>
        <Col span={8}>TRANSACTIONS / EXCEPTIONS</Col>
        <Col span={4} />
      </Row>
    </div>

  )
}

export default EvtSummaryHeader
