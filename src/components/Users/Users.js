import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'antd'
import styles from './Users.less'

const Users = ({ data = [], onDelete }) => {
  function handleDelete(record) {
    return function () {
      if (onDelete) {
        onDelete(record)
      }
    }
  }

  const cols = [{
    title: 'Name',
    dataIndex: 'fullName',
    key: 'fullName',
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: 'Invitation',
    dataIndex: 'invitation',
    key: 'invitation',
  }, {
    title: '',
    key: 'delete',
    render: (text, record) => (
      <Button icon="delete" shape="circle" onClick={handleDelete(record)} />
    ),
  }]

  return (<div className={styles.container}><Table columns={cols} dataSource={data} rowKey={'id'} /></div>)
}

Users.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
}

export default Users
