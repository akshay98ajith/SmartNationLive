import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../../../Components/Button/Button'
import aboutImg from "./../../../assets/video-overlay.png"
import { motion } from 'framer-motion'
import './About.scss'

const About = () => {
    return (
        <section className='aboutSection'>
            <Container>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col sm={12} md={6} className='text-center text-md-start'>
                        <div className="overflow-hidden">
                            <motion.h2 className='scrollAnim' initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>About Us</motion.h2>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h5 className='scrollAnim' initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>Comprehensive safety & compliance management from any device, all within our easy-to-use app. Manage your entire day-to-day safety program from one location.</motion.h5>
                        </div>
                        <div className='my-5'>
                            <div className="overflow-hidden">
                                <motion.p className='scrollAnim' initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                                    AnchoRock Solutions is a construction safety software company helping improve jobsite safety, compliance, and digital safety management for construction companies around the U.S. since 2018. We believe that technology should make life easier for those working in the field so we strive to provide a platform that's as easy to use as it is time-saving.
                                </motion.p>
                            </div>
                            <div className="overflow-hidden">
                                <motion.p className='scrollAnim' initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                                    Without field adoption, AnchoRock - or any other digital solution, for that matter – stood little to no chance of succeeding. That’s why AnchoRock was designed from the ground up as a “mobile-first” platform, and the team has been hyper-focused on maintaining a design that is simple and easy to use since.
                                </motion.p>
                            </div>
                        </div>
                        <Button label="Learn More" />
                    </Col>
                    <Col sm={12} md={5} className="text-center">
                        <motion.img src={aboutImg} alt="" className="img-fluid" initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About