import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts'
import styles from './ExceptionsCard.less'


const data = [{ name: 'Orders & Contracts', value: 400, display: '400/10k' }, { name: 'Tempeatrue Readings', value: 300, display: '300/10k' },
              { name: 'Purchase Orders', value: 300, display: '300/10k' }, { name: 'Location Tracking', value: 200, display: '200/10k' },
              { name: 'Custom Node App', value: 100, display: '100/10k' }]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#CD0000']

const ExceptionsCard = ({ value = '', text = '', contracts = [] }) => {
  return (
    <Card className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          Exceptions by integration
        </div>
        <div className={styles.body}>
          <div className={styles.legend}>
            {data.map((entry, index) => <div className={styles.legendItem} style={index === 1 ? { backgroundColor: COLORS[index % COLORS.length], borderRadius: 7 } : {}}>
              <div className={styles.circle} style={{ backgroundColor: index === 1 ? 'white' : COLORS[index % COLORS.length] }} />
              <div className={styles.legendLabel} style={index === 1 ? { color: 'white' } : {}}>{entry.name}</div>
            </div>)}
          </div>
          <div className={styles.chart}>
            <ResponsiveContainer width={'100%'} height={'100%'}>
              <PieChart width={'100%'} height={'100%'}>
                <Pie
                  activeIndex={1}
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
                  onMouseEnter={() => {}}
                  dataKey="value"
                >
                  {
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
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
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  contracts: PropTypes.array,
}

export default ExceptionsCard
