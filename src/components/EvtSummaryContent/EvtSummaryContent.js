import React from 'react'
import { Collapse } from 'antd'
import PropTypes from 'prop-types'
import { EvtSummary } from 'components'

const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const EvtSummaryContent = ({ data }) => {
  return (
    <Collapse accordion>
      {data.map(entry => (
        <Panel
          className="Panel"
          header={
            <EvtSummary {...entry} />
          }
          key={entry.id}
        >
          <p>{text}</p>
        </Panel>
      ))}
    </Collapse>
  )
}

EvtSummaryContent.propTypes = {
  data: PropTypes.array.isRequired,
}

export default EvtSummaryContent
