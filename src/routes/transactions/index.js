import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Integrations, LeftTitle } from 'components'
// import LeftTitle from '../../components/LeftTitle'
import styles from './index.less'

const Transactions = ({ transactions, loading, dispatch }) => {
  const { apiIntegrations } = transactions
  return (
    <div className={styles.container}>
      <LeftTitle heading={'Transactions'} />
      <Integrations data={apiIntegrations} />
    </div>
  )
}

Transactions.propTypes = {
  transactions: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ transactions, loading }) => ({ transactions, loading }))(Transactions)
