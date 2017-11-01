import React from 'react'
import { EvtSummaryContent, EvtSummaryHeader } from 'components'
// import PropTypes from 'prop-types'
import styles from './EvtListView.less'


const data = [
  { id: '32269', name: 'Herbert Motion', count: '850/20', transactions: 850, exceptions: 20 },
  { id: '31686', name: 'Willie Neal', count: '4056/300', transactions: 4056, exceptions: 300 },
  { id: '914', name: 'Isabel Rice', count: '704/10', transactions: 704, exceptions: 10 },
]

const EvtListView = () => {
  return (
    <div id="abc" className={styles.container}>
      <EvtSummaryHeader />
      <EvtSummaryContent data={data} />
    </div>

  )
}

// EvtListView.propTypes = {
//   data: PropTypes.array.isRequired,
// }

export default EvtListView
