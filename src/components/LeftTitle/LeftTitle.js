import React from 'react'
import PropTypes from 'prop-types'
import { Input, Select } from 'antd'
import styles from './LeftTitle.less'


const Option = Select.Option
const Search = Input.Search

const LeftTitle = ({ heading, subheading, icon, hideSearch = false }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading} >{heading} {icon}</h1>
      { subheading ? (<p className={styles.subheading}>{subheading}</p>) : '' }
      <div>
        <Select labelInValue defaultValue={{ key: 'thisweek' }} style={{ width: 120 }} onChange={() => {}}>
          <Option value="thisweek">This Week</Option>
          <Option value="thisyear">This Year</Option>
        </Select>
      </div>
      { hideSearch ?
        '' :
        <Search
          placeholder="Search"
          className={styles.search}
          onSearch={value => console.log(value)}
        />
    }
    </div>
  )
}

LeftTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  icon: PropTypes.element,
  hideSearch: PropTypes.bool,
}

export default LeftTitle
