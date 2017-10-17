import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Modal, Select, Input, Form, DatePicker, Checkbox, TimePicker } from 'antd'
import { utils } from 'utils'
import styles from './RestConfig.less'

const Option = Select.Option
const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group

const RestConfig = ({ visible,  onClose, onSave }) => {
  return (
    <Modal title={'Setup Rest Integration'} visible={visible} okText={'Save'}
      className={styles.container} maskClosable={false} width={800} onCancel={onClose}
    >
      <div className={styles.container}>
        <Row gutter={24}>
          <Col span={14} offset={1} className={styles.firstcol}>
            <FormItem>
              <Select defaultValue={'POST'} className={styles.method}>
                <Option key={'POST'}>POST</Option>
                <Option key={'GET'}>GET</Option>
              </Select>
              <Input placeholder="Endpoint Url" className={styles.urltext} />
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
              <DatePicker />
            </FormItem>
            <FormItem label={'Frequency'} colon={false} labelCol={{ span: 8 }} wrapperCol={{ span: 15, offset: 1 }}>
              <Select defaultValue={'daily'} className={styles.frequency}>
                <Option key={'daily'}>daily</Option>
                <Option key={'weekly'}>weekly</Option>
                <Option key={'monthly'}>monthly</Option>
              </Select>
            </FormItem>
            <FormItem label={'Time of Day'} colon={false} labelCol={{ span: 8 }} wrapperCol={{ span: 15, offset: 1 }}>
              <TimePicker format={'HH:mm'} className={styles.timepicker} />
            </FormItem>
            <FormItem label={'Expiration'} colon={false} labelCol={{ span: 8 }} wrapperCol={{ span: 15, offset: 1 }}>
              <DatePicker />
            </FormItem>
          </Col>
        </Row>
      </div>
    </Modal>
  )
}

RestConfig.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default RestConfig
