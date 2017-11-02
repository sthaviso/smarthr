import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Events, LeftTitle } from 'components'
import { integrations as iConfig } from 'config'
// import LeftTitle from '../../components/LeftTitle'
import styles from './index.less'

const EVENTS_SUM = [
  { name: 'Orders and Contracts',
    eventsCnt: '60k events',
    logo: iConfig.SALESFORCE.logo,
  },
  { name: 'TT Sensors',
    eventsCnt: '30k events',
    logo: iConfig.TTSENSOR.logo,
  },
  { name: 'Location Tracking',
    eventsCnt: '10k events',
    logo: iConfig.TRUCKTRACK.logo,
  },
  { name: 'Purchase Orders',
    eventsCnt: '5k events',
    logo: iConfig.SAP.logo,
  },
]

const EVENTS = {
  'Orders and Contracts':
  [{ id: '32269', name: 'Herbert Motion', count: '850/20', transactions: 850, exceptions: 20 },
  { id: '31686', name: 'Willie Neal', count: '4056/300', transactions: 4056, exceptions: 300 },
  { id: '914', name: 'Isabel Rice', count: '704/10', transactions: 704, exceptions: 10 }],
}

const Transactions = ({ transactions, dispatch }) => {
  const { source, currentLI } = transactions
  return (
    <div className={styles.container}>
      <LeftTitle heading={'Events'} />
      <Events data={EVENTS_SUM}
        onSrcSelect={src =>
          dispatch({ type: 'transactions/selectSrc', src })}
        currentSrc={source}
        events={EVENTS[source.name]}
        currentLI={currentLI}
        onListItemClick={currLI =>
          dispatch({ type: 'transactions/selectListItem', currLI })}
      />
    </div>
  )
}

Transactions.propTypes = {
  transactions: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ transactions, loading }) => ({ transactions, loading }))(Transactions)
