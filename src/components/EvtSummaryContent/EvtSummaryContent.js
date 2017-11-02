import React from 'react'
import { Collapse } from 'antd'
import PropTypes from 'prop-types'
import { EvtSummary } from 'components'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Panel = Collapse.Panel

const chartData = [
  { name: 'Saturday', txn: 1000, exception: 500 },
  { name: 'Sunday', txn: 2250, exception: 750 },
  { name: 'Monday', txn: 1200, exception: 75 },
  { name: 'Tuesday', txn: 2000, exception: 800 },
  { name: 'Wednesday', txn: 2525, exception: 600 },
  { name: 'Thursday', txn: 4000, exception: 1200 },
  { name: 'Friday', txn: 1500, exception: 400 },
]

const EvtSummaryContent = ({ data, onListItemClick, currentLI }) => {
  if (data) {
    return (
      <div style={{ overflow: 'scroll' }}>
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
              <ResponsiveContainer width={'100%'} height={300}>
                <AreaChart data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis ticks={[500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500]} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="txn" stroke="#76e8a9" fill="#76e8a9" />
                  <Area type="monotone" dataKey="exception" stroke=" #f25984" fill="#f25984" />
                </AreaChart>
              </ResponsiveContainer>
            </Panel>
          ))}
        </Collapse>
      </div>
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
