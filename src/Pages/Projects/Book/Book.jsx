import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import engineer from "./../../../assets/engineer.svg"
import measuring from "./../../../assets/measuring.svg"
import ruler from "./../../../assets/ruler.svg"
import './Book.scss'
const Book = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='book'>
            <Container>
                <Row className='d-flex justify-content-around align-items-center'>
                    <Col sm={5}>
                        <h3>Book an Appointment</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col sm={6}>
                                    <label className="form-label" for='name'>
                                        Name
                                    </label>
                                    <input className="form-control" name='name' type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
                                </Col>
                                <Col sm={6}>
                                    <label className="form-label" for='email'>
                                        Email
                                    </label>
                                    <input className="form-control" name='email' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </Col>
                                <Col sm={6}>
                                    <label className="form-label" for='mobile'>
                                        Phone Number
                                    </label>
                                    <input className="form-control" type="number" name='mobile' placeholder="mobile" {...register("mobile")} />
                                </Col>
                                <Col sm={6}>
                                    <label className="form-label" for='subject'>
                                        Subject
                                    </label>
                                    <input className="form-control" type="text" name='subject' placeholder="Subject" {...register("Subject")} />
                                </Col>
                                <Col sm={12}>
                                    <label className="form-label" for='subject'>
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
                    <Col sm={5}>
                        <div>
                            <Card className='upCard'>
                                <div className="overflow-hidden">
                                    <h3 className='text-center text-sm-start scrollAnim'>Easy, Paperless Tailgate Meetings & Toolbox Talks</h3>
                                </div>
                                <div className="overflow-hidden">
                                    <Row className='my-3 d-flex align-items-center text-center text-sm-start scrollAnim'>
                                        <Col sm={2}>
                                            <img src={engineer} alt="" className="img-fluid mb-4 mb-sm-0" />
                                        </Col>
                                        <Col sm={10}>
                                            <div>
                                                <h6>Easy in the Field. Easy in the Office</h6>
                                                <span>Smart nation is easy for everyone in the field, GCs, and anyone in between</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="overflow-hidden">
                                    <Row className='my-3 d-flex align-items-center text-center text-sm-start scrollAnim'>
                                        <Col sm={2}>
                                            <img src={ruler} alt="" className="img-fluid mb-4 mb-sm-0" />
                                        </Col>
                                        <Col sm={10}>
                                            <div>
                                                <h6>Huge Library of Topics + Personalized</h6>
                                                <span>Smart nation arrives preloaded with a massive library of common safety topics</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="overflow-hidden">
                                    <Row className='my-3 d-flex align-items-center text-center text-sm-start scrollAnim'>
                                        <Col sm={2}>
                                            <img src={measuring} alt="" className="img-fluid mb-4 mb-sm-0" />
                                        </Col>
                                        <Col sm={10}>
                                            <div>
                                                <h6>Full Accountability & Transparency</h6>
                                                <span>Quickly perform Toolbox Audits to ensure field users remain in full compliance</span>
                                            </div>
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