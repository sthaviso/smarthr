import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button } from 'antd'
import { Title, Contracts } from 'components'
import styles from './index.less'

const SmartContract = ({ smartcontracts, dispatch }) => {
  const { contracts } = smartcontracts
  return (
    <div className={styles.container}>
      <Title heading="Contracts in your organization" subheading="Manage contracts and the associated rules"
        icon={
          <Button icon={'plus'} type={'primary'} onClick={() => {
            dispatch({ type: 'smartcontracts/conractAdd' })
          }}
          />}
      />
      <div className={styles.contracts}>
        <Contracts data={contracts.data} selection={contracts.selection}
          onContractSelect={contract => dispatch({ type: 'smartcontracts/selectContract', contract })}
          onRuleSelect={console.log}
        />
      </div>
    </div>
  )
}

SmartContract.propTypes = {
  smartcontracts: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ smartcontracts, loading }) => ({ smartcontracts, loading }))(SmartContract)
