import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import test1 from "../../assets/Crypto-Test.png"
import test2 from "../../assets/Jerry-Piping-Test.png"
import test3 from "../../assets/LeeveOn-Test.png"
import './Testimonials.scss'

const Testimonials = () => {
    return (
        <section className='testimonialsSection'>
            <Container>
                <div className="wrapper">
                    <h2 className='text-center text-md-start'>
                        Real Stories from<br /> Real Customers
                    </h2>
                    <p className='text-center text-md-start'>Get inspired by these stories</p>
                    <Row className='d-flex justify-content-center align-items-center mtUp'>
                        <Col sm={12} md={6}>
                            <Card className='ms-auto p-4' style={{ width: "22rem" }}>
                                <Card.Img variant="top" src={test1} style={{ width: "8rem", marginLeft: "1rem" }} />
                                <Card.Body>
                                    <Card.Text>
                                        Smart nation integrates with Crypto learn invest Learning Management System (LMS) for easy in-the-field tracking of OSHA-required trainings and required certifications.
                                    </Card.Text>
                                    <Card.Title>Floyd Miles</Card.Title>
                                    <Card.Subtitle>Vice President, CLI</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6}>
                            <Card style={{ width: "27rem" }} className='my-4 p-4'>
                                <Card.Img variant="top" src={test2} style={{ width: "8rem", marginLeft: "1rem" }} />
                                <Card.Body>
                                    <Card.Text>
                                        Combine the industry's trusted JPNL with premier field-first safety software to empower your foremen, supervisors and safety pros with compliance tools and data in an easy-to-use app
                                    </Card.Text>
                                    <Card.Title>Jane Cooper</Card.Title>
                                    <Card.Subtitle>CEO, JPNL</Card.Subtitle>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: "18rem" }} className='my-4 p-4'>
                                <Card.Img variant="top" src={test3} style={{ width: "8rem", marginLeft: "1rem" }} />
                                <Card.Body>
                                    <Card.Text>
                                        Integration Component: Employees added to LeeveOn Branding
                                    </Card.Text>
                                    <Card.Title>Kristin Watson</Card.Title>
                                    <Card.Subtitle>Co-Founder, LeeveOn Branding</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Testimonials