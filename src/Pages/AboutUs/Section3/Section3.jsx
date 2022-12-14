import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../../assets/section4About.png'
import './Section3.scss'
const Section3 = () => {
    return (
        <div className='AboutSection3'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col>
                        <img src={img} alt="" className="img-fluid" />
                    </Col>
                    <Col>
                        <p>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Without field adoption, AnchoRock – or any other digital solution, for that matter – stood little to no chance of succeeding. That’s why AnchoRock was designed from the ground up as a “mobile-first” platform, and the team has been hyper-focused on maintaining a design that is simple and easy to use since.</p>
                        <p>Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section3
