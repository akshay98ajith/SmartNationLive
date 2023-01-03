import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import playBtn from "../../../assets/play.svg"
import './Video.scss'
import { motion } from 'framer-motion'

const Video = () => {
    return (
        <section className="videoSection">
            <Container className='text-center'>
                <div className="overflow-hidden">
                    <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                        <h3 className='scrollAnim'>An Ai Powered HSC Solution Designed to Optimize Frontline and On-Site Operations with Ease and Seamless Connectivity.</h3>
                    </motion.div>
                </div>
                <Row className='d-flex justify-content-evenly mt-5'>
                    <Col sm={12} md={6} lg={2}>
                        <motion.div className="overflow-hidden" initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                            <h4 className='scrollAnim'>Data Optimization</h4>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className='scrollAnim'>
                                Safety Brain gives you detailed, live and deep analytics of your on-site Health and Safety Compliances. Analytics that aid you in getting a realistic read & understanding of your resources. Further saving time, and avoiding mishaps & unwarranted fines.
                            </motion.p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className="overflow-hidden">
                            <h4 className='scrollAnim'>AI-Powered</h4>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className='scrollAnim'>
                                Safety Brain works vigilantly towards smart workflow management to ensure that the HSC protocols are not breached. Machine learning within the software is designed to study patterns which further provides smart solutions to increase effective workforce management.
                            </motion.p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <motion.div className="overflow-hidden" initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                            <h4 className='scrollAnim'>Easy to Use</h4>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className='scrollAnim'>
                                Safety Brain is designed to be used in the most simplistic way possible. Be it an extremely robust mobile application or a web-based smart dashboard seamless connectivity and user-friendly UI are common throughout all the platforms.
                            </motion.p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className="overflow-hidden">
                            <h4 className='scrollAnim'>Easy to Deploy</h4>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className='scrollAnim'>
                                Safety Brain is a light and quick registration and installation away from being a part of your daily routine. Update your business-critical systems in real-time and build resiliency, adaptability, and agility into your frontline operations.
                            </motion.p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={2}>
                        <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className="overflow-hidden">
                            <h4 className='scrollAnim'>24*7 Reliable Service</h4>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className='scrollAnim'>
                                Safety Brain is backed by a strong service and support team, expert in creative problem solutions and immediate response. Made available to you 24 hrs a day.
                            </motion.p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="video">
                <img src={playBtn} alt="" className="img-fluid playBtn" />
            </div>
        </section>
    )
}

export default Video
