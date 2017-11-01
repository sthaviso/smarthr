import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
import styles from './EventsSources.less'

const EventsSources = ({ data }) => {
  return (
    <div id="eventsSrc" className={styles.container}>
      {data.map(entry => (
        <Card className={styles.card} key={entry.name} bodyStyle={{ padding: '10px' }}>
          <div className={styles.cardItem}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={entry.logo} alt={entry.name} />
            </div>
            <div>
              <div>{entry.name}</div>
              <div>{entry.eventsCnt}</div>
            </div>
          </div>
        </Card>
        ))}
    </div>

  )
}

EventsSources.propTypes = {
  data: PropTypes.array.isRequired,
}

export default EventsSources
