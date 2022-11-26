import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import Button from '../../Atoms/Button/Button'
import "./GetInTouch.scss"

const GetInTouch = () => {
    return (
        <section className="contactSection">
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col sm={12} md={3} className="d-flex flex-column justify-content-between text-center text-md-start">
                        <h3>Let's Build Something Together</h3>
                        <p>Smart nation is the construction companies' solution for making job sites safer and compliant with regulatory requirements in the safest way possible. With a ‘mobile-first’ approach in mind.</p>
                        <Button label="Get in touch" />
                    </Col>
                    <Col sm={12} md={8}>
                        <Accordion defaultActiveKey="0" flush className='text-justify'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is the difference between an active and inactive user?
                                </Accordion.Header>
                                <Accordion.Body>
                                    We price based on two types of users: active and inactive.
                                    An active user is someone who will login to the software and utilize it to host a tailgate meeting, lead a training, complete an inspection, et
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What type of payment do we accept?
                                </Accordion.Header>
                                <Accordion.Body>
                                    We price based on two types of users: active and inactive.
                                    An active user is someone who will login to the software and utilize it to host a tailgate meeting, lead a training, complete an inspection, et
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Will you provide training documentation?

                                </Accordion.Header>
                                <Accordion.Body>
                                    We price based on two types of users: active and inactive.
                                    An active user is someone who will login to the software and utilize it to host a tailgate meeting, lead a training, complete an inspection, et
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How long will it take to get our account setup?
                                </Accordion.Header>
                                <Accordion.Body>
                                    We price based on two types of users: active and inactive.
                                    An active user is someone who will login to the software and utilize it to host a tailgate meeting, lead a training, complete an inspection, et
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GetInTouch