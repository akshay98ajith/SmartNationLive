import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Section2.scss'
import img from '../../../assets/aboutsection2.png'

const Section2 = () => {
    return (
        <div className='aboutSection2'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col sm={12} md={5}>
                        <div className="card _1">
                            <h4>Mission </h4>
                            <h5>Developing Safer & Smarter Jobsites With AI-powered Solutions For Urban Wellbeing.</h5>
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <div className="card _2">
                            <h4>Vision</h4>
                            <h5>We Exist To Invent A Better Everyday.</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section2
