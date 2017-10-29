import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import numeral from 'numeral'
import { ContractsLI } from 'components'
import styles from './ContractsCard.less'

const ContractsCard = ({ value, text, contracts = [] }) => {
  return (
    <Card className={styles.container}>
      <div className={styles.content}>
        <div className={styles.summary}>
          <div>
            <div className={styles.text}>{text}</div>
            <div className={styles.subtext}>{'recently failed contracts'}</div>
          </div>
          <div className={styles.value}>{numeral(value).format('0a')}</div>
        </div>
        <div className={styles.docList}>
          {contracts.map(item => (<ContractsLI contractName={item.name} key={item.name} />))}
        </div>
      </div>
    </Card>
  )
}

ContractsCard.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  contracts: PropTypes.array,
}

export default ContractsCard
