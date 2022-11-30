import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import appImg1 from "../../../assets/Jerry-Piping.png"
import appImg2 from "../../../assets/Korane-Scents.png"
import appImg3 from "../../../assets/Nadine-Ghaida.png"
import appImg4 from "../../../assets/LeeveOn-Branding.png"
import appImg5 from "../../../assets/Jrango-Glasses.png"
import appImg6 from "../../../assets/Crypto-Learn-Invest.png"
const Safety = () => {
    return (
        <section className='safetySection'>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col sm={12} md={6} className="d-flex flex-column justify-content-center text-center text-md-start">
                        <h3>
                            Safety Professional Approved.
                        </h3>
                        <p>Built for construction safety professionals, by construction
                            safety professionals.
                        </p>
                    </Col>
                    <Col sm={12} md={6}>
                        <Row>
                            <Col xs={6} md={4} className=" text-center">
                                <img src={appImg1} alt="" className="imgfluid" />
                            </Col>
                            <Col xs={6} md={4} className=" text-center">
                                <img src={appImg2} alt="" className="imgfluid" />
                            </Col>
                            <Col xs={6} md={4} className=" text-center">
                                <img src={appImg3} alt="" className="imgfluid" />
                            </Col>
                            <Col xs={6} md={4} className=" text-center">
                                <img src={appImg4} alt="" className="imgfluid" />
                            </Col>
                            <Col xs={6} md={4} className=" text-center">
                                <img src={appImg5} alt="" className="imgfluid" />
                            </Col>
                            <Col xs={6} md={4} className=" text-center">
                                <img src={appImg6} alt="" className="imgfluid" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Safety
