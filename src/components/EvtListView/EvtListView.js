import React from 'react'
import { EvtSummaryContent, EvtSummaryHeader } from 'components'
import PropTypes from 'prop-types'
import styles from './EvtListView.less'

const EvtListView = ({ data, onListItemClick, currentLI }) => {
  return (
    <div className={styles.container}>
      <EvtSummaryHeader />
      <EvtSummaryContent data={data}
        onListItemClick={onListItemClick}
        currentLI={currentLI}
      />
    </div>

  )
}

EvtListView.propTypes = {
  data: PropTypes.array,
  onListItemClick: PropTypes.func.isRequired,
  currentLI: PropTypes.object.isRequired,
}

export default EvtListView
