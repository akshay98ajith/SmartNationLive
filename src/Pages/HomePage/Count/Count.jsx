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
                <div className='d-flex'>
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
                </div>
                <div className='upCardPos'>
                    <Card className='upCard'>
                        <div className="overflow-hidden">
                            <motion.h3 className='text-center text-sm-start scrollAnim' initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>Easy, Paperless Tailgate Meetings & Toolbox Talks</motion.h3>
                        </div>
                        <div className="overflow-hidden">
                            <Row className='my-3 d-flex align-items-center text-center text-sm-start scrollAnim'>
                                <Col sm={2}>
                                    <motion.img initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} src={engineer} alt="" className="img-fluid mb-4 mb-sm-0" />
                                </Col>
                                <Col sm={10}>
                                    <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                                        <h6>Easy in the Field. Easy in the Office</h6>
                                        <span>Smart nation is easy for everyone in the field, GCs, and anyone in between</span>
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
                                        <h6>Huge Library of Topics + Personalized</h6>
                                        <span>Smart nation arrives preloaded with a massive library of common safety topics</span>
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
                                        <h6>Full Accountability & Transparency</h6>
                                        <span>Quickly perform Toolbox Audits to ensure field users remain in full compliance</span>
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