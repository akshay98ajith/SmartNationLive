import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Button from '../../Components/Button/Button';
import './ContactForm.scss'

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="contactCard">
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
                    <Col sm={12}>
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
        </div>
    )
}

export default ContactForm
