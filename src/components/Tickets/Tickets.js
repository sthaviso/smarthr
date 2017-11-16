import React from 'react'
import { List, Avatar, Dropdown, Icon, Menu } from 'antd'
import PropTypes from 'prop-types'
import styles from './Tickets.less'

const Tickets = ({ tickets, selectedTicket, onSelectTicket }) => {
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
            className={item.id === selectedTicket.id ? styles.selectedTicket : ''}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.createdBy.avatar} />}
              title={item.createdBy.name}
              description={item.text}
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
