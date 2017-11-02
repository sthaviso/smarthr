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

const EvtSummaryContent = ({ data, onListItemClick, currentLI }) => {
  if (data) {
    return (
      <Collapse accordion
        onChange={(activeKey) => {
          onListItemClick(data[activeKey])
        }}
      >
        {data.map((entry, index) => (
          <Panel
            className="Panel"
            header={
              <EvtSummary {...entry} currentLI={currentLI} />
            }
            key={index}
          >
            <p>{text}</p>
          </Panel>
        ))}
      </Collapse>
    )
  }

  return (<div />)
}

EvtSummaryContent.propTypes = {
  data: PropTypes.array,
  onListItemClick: PropTypes.func.isRequired,
  currentLI: PropTypes.object.isRequired,
}

export default EvtSummaryContent
