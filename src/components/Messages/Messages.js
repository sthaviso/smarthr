import React from 'react'
import PropTypes from 'prop-types'
import { ChatWindow } from 'components'
import styles from './Messages.less'


const Messages = ({ messages, onSubmit, selectedTicket }) => {
  return (
    <div className={styles.container}>
      <ChatWindow messages={messages} onSubmit={onSubmit} selectedTicket={selectedTicket} />
    </div>
  )
}

Messages.propTypes = {
  messages: PropTypes.array,
  onSubmit: PropTypes.func,
  selectedTicket: PropTypes.object,
}

export default Messages
