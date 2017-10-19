import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Input, Form } from 'antd'
import styles from './Users.less'

const Users = ({ data = [],
  onDelete,
  onSave,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function handleDelete (record) {
    return function () {
      onDelete(record)
    }
  }

  function handleSave () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) return
      onSave(values)
    })
  }

  const cols = [{
    title: 'Name',
    dataIndex: 'fullName',
    key: 'fullName',
    render: (text, record) => {
      if (record.id !== 'new') return text
      return (
        <Form.Item hasFeedback key={'new-user-name'} className={styles.formitem}>
          {getFieldDecorator('fullName', {
            rules: [{
              required: true,
            }],
          })(<Input placeholder="John Doe" />)}
        </Form.Item>
      )
    },
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text, record) => {
      if (record.id !== 'new') return text
      return (
        <Form.Item hasFeedback key={'new-user-email'} className={styles.formitem}>
          {getFieldDecorator('email', {
            rules: [{
              required: true,
            }],
          })(<Input placeholder="johndoe@gmail.com" />)}
        </Form.Item>
      )
    },
  }, {
    title: 'Invitation',
    dataIndex: 'invitation',
    key: 'invitation',
  }, {
    title: '',
    key: 'delete',
    render: (text, record) => {
      if (record.id === 'new') {
        return [
          <Button icon="save" shape="circle" onClick={handleSave} key={'add'} />,
          <Button icon="delete" shape="circle" onClick={handleDelete(record)} key={'delete'} className={styles.delete} />,
        ]
      }
      return <Button icon="delete" shape="circle" onClick={handleDelete(record)} />
    },
  }]

  return (
    <div className={styles.container}>
      <form>
        <Table columns={cols} dataSource={data} rowKey={'id'} />
      </form>
    </div>
  )
}

Users.propTypes = {
  form: PropTypes.object.isRequired,
  data: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default Form.create()(Users)
