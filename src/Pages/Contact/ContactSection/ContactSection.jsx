import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from '../../../Molecules/ContactForm/ContactForm'
import tel from '../../../assets/tel.svg'
import mail from '../../../assets/mail.svg'
import './ContactSection.scss'
const ContactSection = () => {
    return (
        // <div>
        //     <ContactForm />
        // </div>
        <Container>
            <Row className='d-flex justify-content-center align-items-center ContactInfo'>
                <Col sm={6} md={5}>
                    <h4>
                        Get In Touch
                    </h4>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={2}>
                            <img src={tel} alt="" className="img-fluid" />
                        </Col>
                        <Col sm={10}>
                            <p style={{ 'font-weight': '900' }}>
                                Tel
                            </p>
                            <p>
                                <a href="tel:+027900000">02-790-0000</a>
                            </p>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={2}>
                            <img src={mail} alt="" className="img-fluid" />
                        </Col>
                        <Col sm={10}>
                            <p style={{ 'font-weight': '900' }}>
                                Email
                            </p>
                            <p>
                                <a href="mailto:sales@safetybrain.ae">sales@safetybrain.ae</a>
                            </p>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={2}>
                            <img src={mail} alt="" className="img-fluid" />
                        </Col>
                        <Col sm={10}>
                            <p style={{ 'font-weight': '900' }}>
                                Office
                            </p>
                            <p>
                                60 Manor Station St.<br />
                                Fairport, AUH, UAE
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6} md={5}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection
