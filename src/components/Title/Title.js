import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.less'

const Title = ({ heading, subheading }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading} >{heading}</h1>
      { subheading ? (<p className={styles.subheading}>{subheading}</p>) : '' }
    </div>
  )
}

Title.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string
}

export default Title
