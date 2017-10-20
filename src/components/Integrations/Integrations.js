import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { utils } from 'utils'
import { IntegrationCard } from 'components'
import styles from './Integrations.less'

const Integrations = ({ data = [], type = 'integration' }) => {
  return (
    <div className={styles.container}>
      {utils.chunk(data, 3, true, { placeholder: true }).map((row, rowIndex) => (
        <Row type="flex" justify="space-around" align="middle" key={rowIndex}>
          {row.map((col, colIndex) => (
            <Col span={6} key={`${rowIndex}_${colIndex}`}>
              { !col.placeholder ? <IntegrationCard data={col} /> : '' }
            </Col>
          ))}
        </Row>
      ))}
      {!data.length ? <div className={styles.messagecontainer}><div className={styles.message}>No {type}s found.</div></div> : '' }
    </div>
  )
}

Integrations.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
}

export default Integrations
