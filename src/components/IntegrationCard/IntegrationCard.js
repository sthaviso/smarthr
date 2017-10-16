import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Button, Card, Dropdown } from 'antd'
import moment from 'moment'
import styles from './IntegrationCard.less'

require('moment-duration-format-frequency')

const integrations = {
  SALESFORCE (data) {
    return {
      logo: '/integrations/salesforce.png',
      title: `${data.object} Read`,
      subtitle: 'Salesforce Integration',
      info: `Polls ${moment.duration(data.frequency.duration, data.frequency.period).formatAsFrequency(data.frequency.period)} at ${moment(data.frequency.at, 'HH:mm').format('hh:mm a')}`,
      expiry: true,
    }
  },
  ORACLE (data) {
    return {
      logo: '/integrations/oracle.png',
      title: `${data.object} Read`,
      subtitle: 'Oracle Integration',
      info: `Polls ${moment.duration(data.frequency.duration, data.frequency.period).formatAsFrequency(data.frequency.period)} at ${moment(data.frequency.at, 'HH:mm').format('hh:mm a')}`,
      expiry: true,
    }
  },
  SAP (data) {
    return {
      logo: '/integrations/sap.png',
      title: `${data.object} Read`,
      subtitle: 'SAP Integration',
      info: `Polls ${moment.duration(data.frequency.duration, data.frequency.period).formatAsFrequency(data.frequency.period)} at ${moment(data.frequency.at, 'HH:mm').format('hh:mm a')}`,
      expiry: true,
    }
  },
  TTSENSOR () {
    return {
      logo: '/integrations/avery_dennison.png',
      title: 'TT Sensor',
      subtitle: 'Avery Dennison Integration',
      info: 'Posts on phone tap',
      expiry: false,
    }
  },
  TRUCKTRACK () {
    return {
      logo: '/integrations/fourkites.png',
      title: 'Truck Tracking',
      subtitle: 'Four Kites Integration',
      info: 'Posts on phone tap',
      expiry: false,
    }
  },
  REST (data) {
    return {
      logo: '/integrations/rest.png',
      title: 'JSON Endpoint',
      subtitle: 'Custom API Integration',
      info: `Polls ${moment.duration(data.frequency.duration, data.frequency.period).formatAsFrequency(data.frequency.period)} at ${moment(data.frequency.at, 'HH:mm').format('hh:mm a')}`,
      expiry: false,
    }
  },
  DOCUMENT (data) {
    return {
      logo: '/integrations/rest.png',
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
    <Card>
      <div className={styles.actions}>
        <Dropdown overlay={menu}>
          <Button icon={'ellipsis'} size={'large'} className={styles.action} />
        </Dropdown>
      </div>
      <div className={styles.logo}>
        <img src={integration.logo} alt={integration.subtitle} />
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
