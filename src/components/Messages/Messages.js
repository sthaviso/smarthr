import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ChatMessage } from 'components'
import styles from './Messages.less'

class Messages extends React.Component {
  componentDidMount () {
    this.messagesEnd.scrollIntoView()
  }

  componentDidUpdate () {
    this.messagesEnd.scrollIntoView()
  }
  render () {
    const { selectedTicket, messages } = this.props
    return (
      <div className={classnames(styles.container, 'ant-list-split')}>
        <div className={classnames(styles.msgHeader, 'ant-list-header')}>
          {selectedTicket.createdBy.name}
        </div>
        <div className={styles.messages}>
          {messages.map(message => (
            <ChatMessage message={message} key={message.id} />
          ))}
          <div style={{ float: 'left', clear: 'both' }}
            ref={(el) => { this.messagesEnd = el }}
          />
        </div>
      </div>
    )
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
  selectedTicket: PropTypes.object,
}

export default Messages
