import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import chunk from 'chunk'
import { IntegrationCard } from 'components'
import styles from './Integrations.less'

const Integrations = ({ data = [] }) => {
  return (
    <div className={styles.container}>
      {chunk(data, 3).map((row, rowIndex) => (
        <Row type="flex" justify="space-around" align="middle" key={rowIndex}>
          {row.map((col, colIndex) => (
            <Col span={5} key={`${rowIndex}_${colIndex}`}><IntegrationCard data={col} /></Col>
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
