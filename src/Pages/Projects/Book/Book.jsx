import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import engineer from "./../../../assets/engineer.svg"
import measuring from "./../../../assets/measuring.svg"
import { motion } from 'framer-motion'
import ruler from "./../../../assets/ruler.svg"
import './Book.scss'
const Book = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='book'>
            <Container>
                <Row className='d-flex justify-content-around align-items-center'>
                    <Col md={5}>
                        <h3>Book an Appointment</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col sm={6}>
                                    <label className="form-label" >
                                        Name
                                    </label>
                                    <input className="form-control" name='name' type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
                                </Col>
                                <Col sm={6}>
                                    <label className="form-label" >
                                        Email
                                    </label>
                                    <input className="form-control" name='email' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </Col>
                                <Col sm={6}>
                                    <label className="form-label" >
                                        Phone Number
                                    </label>
                                    <input className="form-control" type="number" name='mobile' placeholder="mobile" {...register("mobile")} />
                                </Col>
                                <Col sm={6}>
                                    <label className="form-label" >
                                        Subject
                                    </label>
                                    <input className="form-control" type="text" name='subject' placeholder="Subject" {...register("Subject")} />
                                </Col>
                                <Col sm={12}>
                                    <label className="form-label" >
                                        Message
                                    </label>
                                    <textarea className="form-control" type="textarea" name='message' rows="5" placeholder="Message" {...register("Message")} />
                                </Col>
                            </Row>
                            <button className='btn button px-5 py-3 rounded-0 m-auto m-md-0 text-nowrap mb-5 mb-sm-0' type="submit">
                                Send Message
                            </button>
                        </form>
                    </Col>
                    <Col md={5}>
                        <div>
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
                        </div></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Book