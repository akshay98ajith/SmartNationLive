import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Footer.scss"
import footerLogo from "../../assets/footerLogo.png"
import twitter from "../../assets/Twitter.svg"
import facebook from "../../assets/Facebook.svg"
import linkedin from "../../assets/Linkedin.svg"
import youtube from "../../assets/Youtube.svg"
import { Link } from 'react-router-dom'
import { footLinks, headLinks } from '../../Constants/Constants'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col sm={4}>
                        <img src={footerLogo} alt="" className="img-fluid" />
                        <p>Safety Brain is a community of users who take great pride in what they do and are dedicated to doing it at the highest possible level. </p>
                        {/* <h5>CALL US TODAY</h5> */}
                        {/* <a href="tel:+9717638654">
                            <h3>+ 971 7638 654</h3>
                        </a> */}
                        <div className='d-flex align-items-center justify-content-between mt-4 social'>
                            <a href="">
                                <img src={twitter} alt="" className="img-fluid" />
                            </a>
                            <a href="">
                                <img src={facebook} alt="" className="img-fluid" />
                            </a>
                            <a href="">
                                <img src={linkedin} alt="" className="img-fluid" />
                            </a>
                            <a href="">
                                <img src={youtube} alt="" className="img-fluid" />
                            </a>
                        </div>
                    </Col>
                    <Col sm={7} className="d-flex flex-column justify-content-between">
                        <h6>Quick Links</h6>
                        <Row className='mt-5'>
                            <Col sm={6} className="d-flex flex-column">
                                {
                                    headLinks.map((obj) => {
                                        return <Link key={obj.id} to={obj.link}>{obj.label}</Link>
                                    })
                                }
                            </Col>
                            <Col sm={6} className="d-flex flex-column">
                                {
                                    footLinks.map((obj) => {
                                        return <Link key={obj.id} to={obj.link}>{obj.label}</Link>
                                    })
                                }
                            </Col>
                        </Row>
                        <p className='copy'>© SafetyBrain All rights reserved Copyrights 2022</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer