import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Modal, Select, Input, Form, DatePicker, TimePicker } from 'antd'
import styles from './RestConfig.less'

const Option = Select.Option
const FormItem = Form.Item

const RestConfig = ({
  form: {
    validateFieldsAndScroll,
    getFieldDecorator,
  },
  visible,
  onClose,
  onSave,
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) return
      if (onSave({
        type: 'REST',
        expiry: values.expiry.format('MM/DD/YYYY'),
        frequency: {
          duration: 1,
          period: values.frequency,
          at: values.at.format('HH:mm'),
        },
      })) onClose()
    })
  }

  return (
    <Modal title={'Setup Rest Integration'} visible={visible} okText={'Save'} onOk={handleOk}
      className={styles.container} maskClosable={false} width={800} onCancel={onClose}
    >
      <div className={styles.container}>
        <form>
          <Row gutter={24}>
            <Col span={14} offset={1} className={styles.firstcol}>
              <FormItem hasFeedback>
                <Select defaultValue={'POST'} className={styles.method}>
                  <Option key={'POST'}>POST</Option>
                  <Option key={'GET'}>GET</Option>
                </Select>
                {getFieldDecorator('endpoint', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<Input placeholder="Endpoint Url" className={styles.urltext} />)}
              </FormItem>
              <FormItem label={'AUTH HEADER'} colon={false} labelCol={{ span: 5 }} wrapperCol={{ span: 17, offset: 1 }}>
                <Input placeholder={'Token hfDHBHhsdhus*87sba'} />
              </FormItem>
              <FormItem label={'BODY'} colon={false} labelCol={{ span: 5 }} wrapperCol={{ span: 17, offset: 1 }}>
                <Input.TextArea autosize={{ minRows: 8 }} />
              </FormItem>
            </Col>
            <Col span={9} className={styles.secondcol}>
              <FormItem label={'Polling Start'} colon={false} labelCol={{ span: 8 }} wrapperCol={{ span: 15, offset: 1 }}>
                {getFieldDecorator('start', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<DatePicker format={'MM/DD/YYYY'} />)}
              </FormItem>
              <FormItem label={'Frequency'} colon={false} labelCol={{ span: 8 }} wrapperCol={{ span: 15, offset: 1 }}>
                {getFieldDecorator('frequency', {
                  initialValue: 'days',
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<Select className={styles.frequency} >
                  <Option key={'days'}>daily</Option>
                  <Option key={'weeks'}>weekly</Option>
                  <Option key={'months'}>monthly</Option>
                </Select>)}
              </FormItem>
              <FormItem label={'Time of Day'} colon={false} labelCol={{ span: 8 }} wrapperCol={{ span: 15, offset: 1 }}>
                {getFieldDecorator('at', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<TimePicker format={'HH:mm'} className={styles.timepicker} />)}
              </FormItem>
              <FormItem label={'Expiration'} colon={false} labelCol={{ span: 8 }} wrapperCol={{ span: 15, offset: 1 }}>
                {getFieldDecorator('expiry', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(<DatePicker format={'MM/DD/YYYY'} />)}
              </FormItem>
            </Col>
          </Row>
        </form>
      </div>
    </Modal>
  )
}

RestConfig.propTypes = {
  form: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default Form.create()(RestConfig)
