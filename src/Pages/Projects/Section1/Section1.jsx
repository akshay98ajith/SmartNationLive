import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Section1.scss'

const Section1 = () => {
    return (
        <div className='Section1'>
            <Container>
                <Row className='d-fles justify-content-center align-items-center'>
                    <Col sm={5}>
                        <h4>Petrolieum & Gas Refinery</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae esse delectus, tenetur itaque facere blanditiis unde eaque recusandae expedita eius veritatis corporis qui nobis rem! Necessitatibus, dicta fuga beatae similique, ipsum aperiam consectetur rem cumque fugit laborum repudiandae accusamus amet laboriosam maxime animi vel atque voluptas magnam quis minus ipsam! Repudiandae similique, sequi natus repellat iste aspernatur debitis saepe voluptate animi eum odio doloremque quo quos fugit, tempore temporibus?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum error ipsam laborum repellat non incidunt ab labore nobis doloremque corrupti.</p>
                    </Col>
                    <Col sm={4}>
                        <div className="card">
                            <h4>Get Appointment with our Expert</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo delectus, totam dolorum sapiente, ea perspiciatis at nemo mollitia, dolor nulla reprehenderit? Illum, fuga voluptatibus!
                            </p>
                            <button className='btn btn-light'>{'>'}</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section1
