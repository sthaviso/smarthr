import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import styles from './TemplateCard.less'

const TemplateCard = ({ data, onSelect = () => {} }) => {
  return (
    <Card className={styles.container} onClick={() => { onSelect(data) }}>
      <div className={styles.logo}>
        <img src={data.logo} alt={data.name} />
      </div>
      <h3 className={styles.name}>Setup {data.name}</h3>
    </Card>
  )
}

TemplateCard.propTypes = {
  data: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
}

export default TemplateCard
