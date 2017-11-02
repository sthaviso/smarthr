import React from 'react'
import { Row, Col } from 'antd'
import { EventsSources, EvtListView } from 'components'
import PropTypes from 'prop-types'
import styles from './Events.less'

const Events = ({ data, currentSrc, onSrcSelect, events, currentLI, onListItemClick }) => {
  return (
    <div className={styles.container}>
      <Row gutter={24}>
        <Col span={6} className={styles.col}>
          <h3>EVENTS PER INTEGRATION</h3>
          <div style={{ overflow: 'scroll' }}>
            <EventsSources data={data}
              onSrcSelect={onSrcSelect}
              currentSrc={currentSrc}
            />
          </div>
        </Col>
        <Col span={18} className={styles.col}>
          <h3>INDIVIDUAL SENSOR</h3>
          <EvtListView data={events}
            currentLI={currentLI}
            onListItemClick={onListItemClick}
          />
        </Col>
      </Row>
    </div>
  )
}

Events.propTypes = {
  data: PropTypes.array.isRequired,
  onSrcSelect: PropTypes.func.isRequired,
  currentSrc: PropTypes.object.isRequired,
  events: PropTypes.array,
  onListItemClick: PropTypes.func.isRequired,
  currentLI: PropTypes.object.isRequired,
}
export default Events
