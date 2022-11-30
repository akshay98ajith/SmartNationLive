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
                        <h3 className='scrollAnim'>The Comprehensive Software for Managing Jobsite Safety and Compliance</h3>
                    </motion.div>
                </div>
                <Row className='d-flex justify-content-evenly mt-5'>
                    <Col sm={12} md={6} lg={3}>
                        <motion.div className="overflow-hidden" initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                            <h4 className='scrollAnim'>Your site Just Got Safer</h4>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className='scrollAnim'>
                                Nothing on a jobsite is more important than safety. That's why it costs the average construction employee dozens of hours per month to track,  and manage their construction safety compliance. The easier compliance tracking and reporting is, the safer your entire workforce will be.
                            </motion.p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className="overflow-hidden">
                            <h4 className='scrollAnim'>Painless, Straightforward</h4>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className='scrollAnim'>
                                We designed a painless application with universal usability, meaning Superintendents, Foremen, and Field Safety Staff alike can rely on seamless integration with little to no learning curve.
                            </motion.p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <motion.div className="overflow-hidden" initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                            <h4 className='scrollAnim'>Easy-to-Use</h4>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className='scrollAnim'>
                                Saftey nation is easy for everyone the field, GCs, and anyone in between. The Toolbox Talk module is revolutionizing how construction companies manage their day-to-day jobsite safety with a slew of easy-to-use features that make you more efficient than ever.
                            </motion.p>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <motion.div initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className="overflow-hidden">
                            <h4 className='scrollAnim'>24x7 Friendly Support</h4>
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.p initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }} className='scrollAnim'>
                                We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.
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
