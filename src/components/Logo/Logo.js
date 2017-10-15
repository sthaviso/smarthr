import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import config from 'config'
import styles from './Logo.less'

const Logo = ({ size, text, name, theme }) => {
  return (
    <div className={classNames(styles.logo, { [styles.small]: size === 'sm', [styles.lighttheme]: theme === 'light' })}>
      <img alt={'logo'} src={'/img/logo.svg'} />
      <span>{name ? config.name : ''} {text}</span>
    </div>
  )
}

Logo.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.bool,
  theme: PropTypes.string,
}

export default Logo
