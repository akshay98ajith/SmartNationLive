import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Section2.scss'
import img from '../../../assets/aboutsection2.png'

const Section2 = () => {
    return (
        <div className='aboutSection2'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col>
                        <h5>Comprehensive safety & compliance management from any device, all within our easy-to-use app. Manage your entire day-to-day safety program from one location.</h5>
                        <p>
                            AnchoRock Solutions is a construction safety software company helping improve jobsite safety, compliance, and digital safety management for construction companies around the U.S. since 2018. We believe that technology should make life easier for those working in the field so we strive to provide a platform that's as easy to use as it is time-saving.</p>
                    </Col>
                    <Col>
                        <img src={img} className='img-fluid' alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section2
