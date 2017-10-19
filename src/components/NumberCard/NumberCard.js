import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import numeral from 'numeral'
import classnames from 'classnames'
import styles from './NumberCard.less'

const NumberCard = ({ value, text, theme = 'default' }) => {
  return (
    <Card className={styles.container}>
      <div className={styles.content}>
        <div className={classnames(styles.value, { [styles.green]: theme === 'green' })}>{numeral(value).format('0a')}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </Card>
  )
}

NumberCard.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.string,
}

export default NumberCard
