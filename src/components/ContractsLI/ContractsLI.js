import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'antd'
import styles from './ContractsLI.less'

const ContractsLI = ({ contractName }) => {
  return (
    <div className={styles.docListItem}>
      <Icon type="file-text" className={styles.docIcon} />
      <div className={styles.docItem}>
        <div>
          <div className={styles.contractName}>{contractName}</div>
          <div className={styles.link}>{'open to view more'}</div>
        </div>
        <div>
          <Button icon="upload" className={styles.actionIcon} />
        </div>
      </div>
    </div>
  )
}

ContractsLI.propTypes = {
  contractName: PropTypes.string.isRequired,
}

export default ContractsLI
