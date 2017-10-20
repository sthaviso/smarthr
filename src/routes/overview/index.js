import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col } from 'antd'
import { Title, NumberCard } from 'components'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import styles from './index.less'

const Setup = ({ overview, loading, dispatch }) => {
  const data = [
    { name: 'Saturday', value: 1000 },
    { name: 'Sunday', value: 2250 },
    { name: 'Monday', value: 1200 },
    { name: 'Tuesday', value: 2000 },
    { name: 'Wednesday', value: 2525 },
    { name: 'Thursday', value: 4000 },
    { name: 'Friday', value: 1500 },
  ]
  return (
    <div className={styles.container}>
      <Title heading={'Farm to Home Groceries'} subheading={'activity over past year'} />
      <Row>
        <Col span={6} offset={1}>
          <NumberCard value={70} text={'Active Contracts'} theme={'green'} />
        </Col>
        <Col span={6} offset={2}>
          <NumberCard value={150000} text={'Transactions'} />
        </Col>
        <Col span={6} offset={2}>
          <NumberCard value={85} text={'Partners'} />
        </Col>
      </Row>
      <Row>
        <Col span={22} offset={1} className={styles.chartcontainer}>
          <h2 className={styles.title}>Transaction History</h2>
          <ResponsiveContainer width={'100%'} height={400}>
            <AreaChart data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="name" />
              <YAxis ticks={[500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500]} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#88ECF9" fill="#88ECF9" />
            </AreaChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </div>
  )
}

Setup.propTypes = {
  overview: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ overview, loading }) => ({ overview, loading }))(Setup)
