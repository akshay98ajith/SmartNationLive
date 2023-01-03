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
                        <h3>Ai Powered, Safety & Compliance Management Solution.</h3>
                        <h5>Safety brain provides accessibility from any device within our Easy to use app. </h5>
                        <p>Safety Brain is a cross-platform management app which allows you to connect with your job site seamlessly.</p>
                        <p>Safety Brain helps you check the eligibility of your workforce towards smart safety and compliance and gives you the option to alert the authorities with a click of a button to help avoid fines. </p>
                        <p>Enabling robust information at your fingertips to ensure Better Safety & Resource Management. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section3
