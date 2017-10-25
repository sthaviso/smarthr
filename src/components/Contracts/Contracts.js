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

const Contracts = ({ data, selection, onContractSelect, onRuleSelect }) => {
  const contracts = data
  const rules = selection.contract ? selection.contract.rules : []
  return (
    <div className={styles.container}>
      <Row gutter={24}>
        <Col span={6} className={styles.col}>
          <h3 className={styles.heading}>Contracts</h3>
          {contracts.map(contract => <Card key={contract.id} className={classnames(styles.tile, {
            [styles.selected]: contract.id === selection.contract.id,
          })}
            onClick={() => { onContractSelect(contract) }}
          >
            <div className={styles.actions}>
              <Dropdown overlay={menu}>
                <Button icon={'ellipsis'} size={'large'} className={styles.action} />
              </Dropdown>
            </div>
            {contract.name}
          </Card>)}
          <Card key={'new-contract'} className={classnames(styles.tile, styles.new)}>
            Add new contract
          </Card>
        </Col>
        <Col span={6} className={styles.col}>
          <h3 className={styles.heading}>Rules</h3>
          {rules.map(rule => <Card key={rule.id} className={classnames(styles.tile, {
            [styles.selected]: rule.id === selection.rule.id,
          })}
            onClick={() => { onRuleSelect(rule) }}
          >
            <div className={styles.actions}>
              <Dropdown overlay={menu}>
                <Button icon={'ellipsis'} size={'large'} className={styles.action} />
              </Dropdown>
            </div>
            <div>{rule.name}</div>
            <div className={styles.subtitle}>Based on {rule.basedOn}</div>
          </Card>)}
          <Card key={'new-rule'} className={classnames(styles.tile, styles.new)}>
            Add new rule
          </Card>
        </Col>
        <Col span={12}>
          <h3 className={styles.heading}>Logic</h3>
          <Card className={classnames(styles.tile, styles.logic, { [styles.noselection]: !selection.rule })}>
            {selection.rule ? <img src={selection.rule.image} alt={selection.rule.name} className={styles.logicimg} /> : 'No Rule Selected'}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Contracts.propTypes = {
  data: PropTypes.array.isRequired,
  selection: PropTypes.object.isRequired,
  onContractSelect: PropTypes.func.isRequired,
  onRuleSelect: PropTypes.func.isRequired,
}

export default Contracts
