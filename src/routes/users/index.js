import React from 'react'
import { connect } from 'dva'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import styles from './index.less'

const Setup = ({ dispatch }) => {
  return (
    <div className={styles.container}>
      <Button
        type="primary"
        onClick={() => { dispatch({ type: 'users/seedFirebase' }) }}
      >
        Seed Firebase
    </Button>
    </div>
  )
}

Setup.propTypes = {
  dispatch: PropTypes.func,
}

export default connect(() => { return {} })(Setup)
