import React from 'react'
import { List, Avatar, Dropdown, Icon, Menu } from 'antd'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TimeAgo from 'react-timeago'
import engStrings from 'react-timeago/lib/language-strings/en-short.js'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import styles from './Tickets.less'

const Tickets = ({ tickets, selectedTicket, onSelectTicket }) => {
  const formatter = buildFormatter(engStrings)
  const menu = (
    <Menu>
      <Menu.Item>Close</Menu.Item>
    </Menu>
  )
  return (
    <div className={styles.container}>
      <List
        header={<div>Conversations</div>}
        itemLayout="horizontal"
        dataSource={tickets}
        renderItem={item => (
          <List.Item
            actions={[<Dropdown overlay={menu}>
              <Icon type="ellipsis" />
            </Dropdown>]}
            key={item.id}
            onClick={() => onSelectTicket(item)}
            className={classnames(styles.listitem, item.id === selectedTicket.id ? styles.selectedTicket : '')}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.createdBy.avatar} size="large" />}
              title={
                <div className={styles.title}>
                  <div>{item.createdBy.name}</div>
                  <div className={styles.timeStamp}>
                    <TimeAgo date={item.timestamp} formatter={formatter} />
                  </div>
                </div>
              }
              description={
                <div className={styles.title}>
                  <div>{item.text}</div>
                  <div>
                    <Avatar size="small">{item.unreadMessagesCount}</Avatar>
                  </div>
                </div>
              }
              className={styles.meta}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

Tickets.propTypes = {
  tickets: PropTypes.array,
  onSelectTicket: PropTypes.func,
  selectedTicket: PropTypes.object,
}

export default Tickets
