import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Button, Card, Dropdown } from 'antd'
import moment from 'moment'
import { integrations as iConfig } from 'config'
import styles from './IntegrationCard.less'

require('moment-duration-format-frequency')

const integrations = {
  SALESFORCE (data) {
    return {
      logo: iConfig.SALESFORCE.logo,
      title: `${data.object} Read`,
      subtitle: 'Salesforce Integration',
      info: `Polls ${moment.duration(data.frequency.duration, data.frequency.period).formatAsFrequency(data.frequency.period)} at ${moment(data.frequency.at, 'HH:mm').format('hh:mm a')}`,
      expiry: true,
    }
  },
  ORACLE (data) {
    return {
      logo: iConfig.ORACLE.logo,
      title: `${data.object} Read`,
      subtitle: 'Oracle Integration',
      info: `Polls ${moment.duration(data.frequency.duration, data.frequency.period).formatAsFrequency(data.frequency.period)} at ${moment(data.frequency.at, 'HH:mm').format('hh:mm a')}`,
      expiry: true,
    }
  },
  SAP (data) {
    return {
      logo: iConfig.SAP.logo,
      title: `${data.object} Read`,
      subtitle: 'SAP Integration',
      info: `Polls ${moment.duration(data.frequency.duration, data.frequency.period).formatAsFrequency(data.frequency.period)} at ${moment(data.frequency.at, 'HH:mm').format('hh:mm a')}`,
      expiry: true,
    }
  },
  TTSENSOR () {
    return {
      logo: iConfig.TTSENSOR.logo,
      title: 'TT Sensor',
      subtitle: 'Avery Dennison Integration',
      info: 'Posts on phone tap',
      expiry: false,
    }
  },
  TRUCKTRACK () {
    return {
      logo: iConfig.TRUCKTRACK.logo,
      title: 'Truck Tracking',
      subtitle: 'Four Kites Integration',
      info: 'Posts on phone tap',
      expiry: false,
    }
  },
  REST (data) {
    return {
      logo: iConfig.REST.logo,
      title: 'JSON Endpoint',
      subtitle: 'Custom API Integration',
      info: `Polls ${moment.duration(data.frequency.duration, data.frequency.period).formatAsFrequency(data.frequency.period)} at ${moment(data.frequency.at, 'HH:mm').format('hh:mm a')}`,
      expiry: false,
    }
  },
  DOCUMENT (data) {
    return {
      logo: iConfig.DOCUMENT.logo,
      title: data.name,
      subtitle: `Created by ${data.by}`,
      info: data.status === 'READY' ? 'Available to upload' : 'Pending Review',
      expiry: true,
    }
  },
}

const menu = (
  <Menu>
    <Menu.Item>Details</Menu.Item>
    <Menu.Item>Trigger Now</Menu.Item>
  </Menu>
)

const IntegrationCard = ({ data }) => {
  const integration = integrations[data.type](data)
  return (
    <Card className={styles.container}>
      <div className={styles.actions}>
        <Dropdown overlay={menu}>
          <Button icon={'ellipsis'} size={'large'} className={styles.action} />
        </Dropdown>
      </div>
      <div className={styles.logo}>
        <img src={integration.logo} alt={integration.title} />
      </div>
      <h3>{integration.title}</h3>
      <p>{integration.subtitle}</p>
      <p className={styles.info}>{integration.info}</p>
      { integration.expiry ? <p className={styles.expiry}>{data.expiry}</p> : ''}
    </Card>
  )
}

IntegrationCard.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IntegrationCard
