import { motion } from 'framer-motion'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import engineer from "./../../../assets/engineer.svg"
import measuring from "./../../../assets/measuring.svg"
import ruler from "./../../../assets/ruler.svg"
import './Count.scss'
const Count = () => {
    // const { scrollYProgress } = useScroll();
    return (
        <section className='countSection'>
            <Container>
                {/* <div className='d-flex'>
                    <Card className='card1'>
                        <div className="overflow-hidden">
                            <motion.div className='scrollAnim' initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                                <h2>147</h2>
                                <p>Completed Projects</p>
                            </motion.div>
                        </div>
                    </Card>
                    <Card className='card2'>
                        <div className="overflow-hidden">
                            <motion.div className='scrollAnim' initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                                <h2>25+</h2>
                                <p>Years of Experience</p>
                            </motion.div>
                        </div>
                    </Card>
                </div> */}
                <div className='upCardPos'>
                    <Card className='upCard'>
                        <div className="overflow-hidden">
                            <Row className='my-3 d-flex align-items-center text-center text-sm-start scrollAnim'>
                                <Col sm={2}>
                                    <motion.img initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} src={engineer} alt="" className="img-fluid mb-4 mb-sm-0" />
                                </Col>
                                <Col sm={10}>
                                    <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                                        <h6>Reliable</h6>
                                        <span>Establish Transparent and On-Demand Workforce Safety Parameter Checks.</span>
                                    </motion.div>
                                </Col>
                            </Row>
                        </div>
                        <div className="overflow-hidden">
                            <Row className='my-3 d-flex align-items-center text-center text-sm-start scrollAnim'>
                                <Col sm={2}>
                                    <motion.img initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} src={ruler} alt="" className="img-fluid mb-4 mb-sm-0" />
                                </Col>
                                <Col sm={10}>
                                    <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                                        <h6>Seamless</h6>
                                        <span>Enable Easy & Seamless Connections between On & Off-site Professionals.</span>
                                    </motion.div>
                                </Col>
                            </Row>
                        </div>
                        <div className="overflow-hidden">
                            <Row className='my-3 d-flex align-items-center text-center text-sm-start scrollAnim'>
                                <Col sm={2}>
                                    <motion.img initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} src={measuring} alt="" className="img-fluid mb-4 mb-sm-0" />
                                </Col>
                                <Col sm={10}>
                                    <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                                        <h6>Customizable</h6>
                                        <span>Implement Personalized & Customizable Machine Learning Experiences & empower yourself with Holistic Libraries of HSC Knowledge</span>
                                    </motion.div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </Container>
        </section>
    )
}

export default Count