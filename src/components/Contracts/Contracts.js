import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Dropdown, Button, Menu } from 'antd'
import classnames from 'classnames'
import styles from './Contracts.less'

const menu = (
  <Menu>
    <Menu.Item>Details</Menu.Item>
    <Menu.Item>Edit</Menu.Item>
    <Menu.Item>Remove</Menu.Item>
  </Menu>
)

const Contracts = ({ data, selection }) => {
  const contracts = data
  const rules = selection.contract.rules

  return (
    <div className={styles.container}>
      <Row gutter={24}>
        <Col span={6}>
          <h3 className={styles.heading}>Contracts</h3>
          {contracts.map(contract => <Card key={contract.id} className={classnames(styles.tile, {
              [styles.selected]: contract.id === selection.contract.id
          })}>
            <div className={styles.actions}>
              <Dropdown overlay={menu}>
                <Button icon={'ellipsis'} size={'large'} className={styles.action} />
              </Dropdown>
            </div>
            {contract.name}
          </Card>)}
        </Col>
        <Col span={6}>
          <h3 className={styles.heading}>Rules</h3>
          {rules.map(rule => <Card key={rule.id} className={styles.tile}>
            <div className={styles.actions}>
              <Dropdown overlay={menu}>
                <Button icon={'ellipsis'} size={'large'} className={styles.action} />
              </Dropdown>
            </div>
            {rule.name}
          </Card>)}
        </Col>
        <Col span={12}>
          <h3 className={styles.heading}>Logic</h3>
          <Card className={styles.tile}>Image Here!!</Card>
        </Col>
      </Row>
    </div>
  )
}

Contracts.propTypes = {
  data: PropTypes.array.isRequired,
  selection: PropTypes.object.isRequired,
}

export default Contracts
