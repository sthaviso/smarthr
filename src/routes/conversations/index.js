import React from 'react'
import { connect } from 'dva'
import { Row, Col } from 'antd'
import { Tickets, ChatWindow } from 'components'
import PropTypes from 'prop-types'
import styles from './index.less'

const Setup = ({ conversations, dispatch, app }) => {
  const { tickets, users, selectedTicket, messages } = conversations
  const { user } = app
  const copy = []
  tickets.forEach((element) => {
    copy.push(Object.assign({}, element, { createdBy: users[element.createdBy], key: element.id }))
  })
  const messagesWithUser = []
  messages.forEach((element) => {
    messagesWithUser.push(Object.assign({}, element, { createdBy: users[element.createdBy], key: element.id }))
  })
  return (
    <div className={styles.container}>
      <Row>
        <Col span={10} className={styles.tickets}>
          <Tickets
            tickets={copy}
            onSelectTicket={(ticket) => { dispatch({ type: 'conversations/selectTicket', ticket }) }}
            selectedTicket={selectedTicket}
          />
        </Col>
        <Col span={14}>
          <ChatWindow
            messages={messagesWithUser}
            selectedTicket={selectedTicket}
            onSubmit={(values) => {
              const message = {
                createdBy: user.id,
                timestamp: Date.now(),
                text: values.msg,
                channel: 'email',
                ticketId: selectedTicket.id,
                readStatus: true,
              }
              dispatch({ type: 'conversations/submitMessage', message })
            }}
          /></Col>
      </Row>
    </div>
  )
}

Setup.propTypes = {
  conversations: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
}

export default connect(({ app, conversations }) => ({ app, conversations }))(Setup)
