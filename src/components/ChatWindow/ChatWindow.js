import React from 'react'
import PropTypes from 'prop-types'
import { Messages } from 'components'
import { Input, Button, Form } from 'antd'
import styles from './ChatWindow.less'

const { TextArea } = Input
const FormItem = Form.Item

const ChatWindow = ({
  messages,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
    resetFields,
  },
  selectedTicket,
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      onSubmit(values)
      resetFields()
    })
  }
  if (messages.length > 0) {
    return (
      <div className={styles.container}>
        <Messages selectedTicket={selectedTicket} messages={messages} />
        <div className={styles.inputDiv}>
          <Form layout="inline" className={styles.form} onSubmit={handleSubmit}>
            <FormItem className={styles.inputBox} wrapperCol={{ span: 24 }}>
              {
                getFieldDecorator('msg', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<TextArea rows={2} />)
              }
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                shape="circle"
                icon="download"
                size="large"
                className={styles.submitButton}
                htmlType="submit"
              />
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
  return (<div>Click to load</div>)
}

ChatWindow.propTypes = {
  messages: PropTypes.array,
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  selectedTicket: PropTypes.object,
}

export default Form.create()(ChatWindow)
