import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

const Setup = ({ overview, loading, dispatch }) => {
  return (
    <div>overview</div>
  )
}

Setup.propTypes = {
  overview: PropTypes.object,
  loading: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ overview, loading }) => ({ overview, loading }))(Setup)
