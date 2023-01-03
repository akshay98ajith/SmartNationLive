import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Section1.scss'

const Section1 = () => {
    return (
        <div className='Section1'>
            <Container>
                <Row className='d-fles justify-content-center align-items-center'>
                    <Col md={5}>
                        <h3>What is Safety Brain</h3>
                        <p>Designed to analyze Human Attributes like Age, Gender, Face, Body etc. and Human behavior like Violence, Misdemeanor and Trespassing etc., the Safety Brain algorithm calculates while learning on the job the typical Jobsite behavior and alerts you when needed while giving you the option to alert the authorities when a situation arises.</p>
                    </Col>
                    <Col md={4}>
                        <div className="card">
                            <p>Empower your Jobsites with AI</p>
                            <p>Avoid Unwarranted Fines</p>
                            <p>Improve Resource Productivity</p>
                            <p>Minimum Effort Maximum Output</p>
                            {/* <button className='btn btn-light'>{'>'}</button> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section1
