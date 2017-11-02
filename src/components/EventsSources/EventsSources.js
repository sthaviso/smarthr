import React from 'react'
import { Card } from 'antd'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './EventsSources.less'

const EventsSources = ({ data, currentSrc, onSrcSelect }) => {
  return (
    <div id="eventsSrc" className={styles.container}>
      {data.map(entry => (
        <Card className={classnames(styles.card, {
          [styles.selected]: currentSrc.name === entry.name,
        })}
          key={entry.name}
          bodyStyle={{ padding: '10px' }}
          onClick={() => { onSrcSelect(entry) }}
        >
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
  onSrcSelect: PropTypes.func.isRequired,
  currentSrc: PropTypes.object.isRequired,
}

export default EventsSources
