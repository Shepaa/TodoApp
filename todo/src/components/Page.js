import React from 'react'
import { NavLink } from 'react-router-dom'
import { Typography, Row, Col, Space } from 'antd'
import styles from './Page.module.css'

const { Title } = Typography
const active = ({ isActive }) => isActive ? styles.active : ''

export function Page ({ children, title }) {

  return (
    <>
      <Row justify="center" className={styles.header}>
        <Col>
          <Space>
            <NavLink to="/" className={active} end>Home</NavLink>
            <NavLink to="/todo/list" className={active}>Todo</NavLink>
            <NavLink to="/about" className={active}>About</NavLink>
          </Space>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Title>{title}</Title>
          {children}
        </Col>
      </Row>
    </>
  )
}