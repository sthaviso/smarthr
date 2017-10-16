import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import chunk from 'chunk'
import { IntegrationCard } from 'components'
import styles from './Integrations.less'

const Integrations = ({ data = [] }) => {
  return (
    <div className={styles.container}>
      {chunk(data, 3).map(row => (
        <Row type="flex" justify="space-around" align="middle">
          {row.map(col => (
            <Col span={5}><IntegrationCard data={col} /></Col>
          ))}
        </Row>
      ))}
    </div>
  )
}

Integrations.propTypes = {
  data: PropTypes.array,
}

export default Integrations
