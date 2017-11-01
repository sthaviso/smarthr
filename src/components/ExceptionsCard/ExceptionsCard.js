import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts'
import styles from './ExceptionsCard.less'


const data = [{ name: 'Orders & Contracts', value: 400, display: '400/10k' }, { name: 'Temperatrue Readings', value: 300, display: '300/10k' },
              { name: 'Purchase Orders', value: 300, display: '300/10k' }, { name: 'Location Tracking', value: 200, display: '200/10k' },
              { name: 'Custom Node App', value: 100, display: '100/10k' }]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#CD0000']

const ExceptionsCard = ({ activeIndex, onPieEnter }) => {
  return (
    <Card className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          Exceptions by integration
        </div>
        <div className={styles.body}>
          <ul className={styles.legend}>
            {data.map((entry, index) =>
              <li
                key={entry.name}
                onClick={() => (onPieEnter(null, index))}
              >
                <span style={index === activeIndex ? { display: 'inline-block', padding: '5px', backgroundColor: COLORS[index % COLORS.length], borderRadius: 7 } : { display: 'inline-block', padding: '5px' }}>
                  <span className={styles.circle} style={{ backgroundColor: index === activeIndex ? 'white' : COLORS[index % COLORS.length] }} />
                  <span className={styles.legendLabel} style={index === activeIndex ? { color: 'white' } : {}}>{entry.name}</span>
                </span>
              </li>)}
          </ul>
          <div className={styles.chart}>
            <ResponsiveContainer width={'100%'} height={'100%'}>
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={({ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload }) => {
                    return (
                      <g>
                        <text className={styles.label} x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.display}</text>
                        <Sector
                          cx={cx}
                          cy={cy}
                          innerRadius={innerRadius}
                          outerRadius={outerRadius}
                          startAngle={startAngle}
                          endAngle={endAngle}
                          fill={fill}
                        />
                        <Sector
                          cx={cx}
                          cy={cy}
                          startAngle={startAngle}
                          endAngle={endAngle}
                          innerRadius={innerRadius - 5}
                          outerRadius={outerRadius}
                          fill={fill}
                        />
                      </g>
                    )
                  }
                  }
                  data={data}
                  innerRadius={'85%'}
                  outerRadius={'90%'}
                  fill="#8884d8"
                  onMouseEnter={onPieEnter}
                  dataKey="value"
                >
                  {
                    data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Card>
  )
}

ExceptionsCard.propTypes = {
  activeIndex: PropTypes.number,
  onPieEnter: PropTypes.func,
}

export default ExceptionsCard
