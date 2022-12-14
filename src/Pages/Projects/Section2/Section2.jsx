import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img1 from '../../../assets/proImg1.png'
import img2 from '../../../assets/proImg2.png'
import img3 from '../../../assets/proImg3.png'
import img4 from '../../../assets/proImg4.png'
import './Section2.scss'
const Section2 = () => {
    return (
        <div className='Section2'>
            <Row>
                <Col xs={4}>
                    <img src={img1} alt="" className="" />
                </Col>
                <Col xs={4} className="middle">
                    <img src={img2} alt="" className="" />
                    <img src={img3} alt="" className="" />
                </Col>
                <Col xs={4}>
                    <img src={img4} alt="" className="" />
                </Col>
            </Row>
        </div>
    )
}

export default Section2
