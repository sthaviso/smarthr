import React from 'react'
import { Row, Col } from 'antd'
import { integrations as iConfig } from 'config'
import { EventsSources, EvtListView } from 'components'
import styles from './Events.less'

const EVENTS_SUM = [
  { name: 'Orders and Contracts',
    eventsCnt: '60k events',
    logo: iConfig.SALESFORCE.logo,
  },
  { name: 'TT Sensors',
    eventsCnt: '30k events',
    logo: iConfig.TTSENSOR.logo,
  },
  { name: 'Location Tracking',
    eventsCnt: '10k events',
    logo: iConfig.TRUCKTRACK.logo,
  },
  { name: 'Purchase Orders',
    eventsCnt: '5k events',
    logo: iConfig.SAP.logo,
  },
]

const Events = () => {
  return (
    <div className={styles.container}>
      <Row gutter={24}>
        <Col span={6} className={styles.col}>
          <h3>EVENTS PER INTEGRATION</h3>
          <div style={{ overflow: 'scroll' }}>
            <EventsSources data={EVENTS_SUM} />
          </div>
        </Col>
        <Col span={18} className={styles.col}>
          <h3>INDIVIDUAL SENSOR</h3>
          <EvtListView />
        </Col>
      </Row>
    </div>
  )
}

export default Events
