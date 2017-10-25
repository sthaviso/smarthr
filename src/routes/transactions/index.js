import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Integrations } from 'components'
import { Input, Select } from 'antd'
import styles from './index.less'


const Option = Select.Option
const Search = Input.Search

const Setup = ({ transactions, loading, dispatch }) => {
  const { apiIntegrations } = transactions
  return (
    <div className={styles.container}>
      <h1>Transactions</h1>
      <div>
      <Select labelInValue defaultValue={{ key: 'thisweek' }} style={{ width: 120 }} onChange={() => {}}>
        <Option value="thisweek">This Week</Option>
        <Option value="thisyear">This Year</Option>
      </Select>
      </div>
      <Search
        placeholder="Search"
        style={{ width: 200, marginBottom: 20, marginTop: 20 }}
        onSearch={value => console.log(value)}
      />
      <Integrations data={apiIntegrations} />
    </div>
  )
}

Setup.propTypes = {
  transactions: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ transactions, loading }) => ({ transactions, loading }))(Setup)
