import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'antd'
import classnames from 'classnames'
import TimeAgo from 'react-timeago'
import engStrings from 'react-timeago/lib/language-strings/en-short.js'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import styles from './ChatMessage.less'

const ChatMessage = ({ message }) => {
  const formatter = buildFormatter(engStrings)
  if (message.createdBy.userType === 'A') {
    return (
      <div key={message.id} className={classnames(styles.messageContainerAdmin, styles.messageContainer)}>
        <div>
          <div className={styles.text}>
            {message.text}
          </div>
          <div className={classnames(styles.timeStamp, styles.timeStampAdmin)}>
            <TimeAgo date={new Date(message.timestamp)} formatter={formatter} />
          </div>
        </div>
        <div className={styles.adminAvatar}>
          <Avatar src={message.createdBy.avatar} />
        </div>
      </div>
    )
  }
  return (
    <div key={message.id} className={styles.messageContainer}>
      <div className={styles.avatar}>
        <Avatar src={message.createdBy.avatar} />
      </div>
      <div>
        <div className={styles.text}>
          {message.text}
        </div>
        <div className={styles.timeStamp}>
          <TimeAgo date={new Date(message.timestamp)} formatter={formatter} />
        </div>
      </div>
    </div>
  )
}

ChatMessage.propTypes = {
  message: PropTypes.object,
}

export default ChatMessage
