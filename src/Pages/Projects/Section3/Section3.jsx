import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Section3.scss'
const Section3 = () => {
    return (
        <div className='Section3'>
            <Row>
                <Col xs={12} sm={6} md={3} className='inn'>
                    <div className='bar bar1'>
                        <h3>Access </h3>
                        <p>Get access to your Jobsite remotely</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className='inn'>
                    <div className='bar bar2'>
                        <h3>Analyze </h3>
                        <p>Get Deep Analytics of your Resource Behavior </p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className='inn'>
                    <div className='bar bar3'>
                        <h3>Plan </h3>
                        <p>Get Safety and compliance tips from integrated AI </p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className='inn'>
                    <div className='bar bar4'>
                        <h3>Safeguard </h3>
                        <p>Two-way alarms and alerts in case of a breach. </p>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default Section3
