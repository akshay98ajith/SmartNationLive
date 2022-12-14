import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Section3.scss'
const Section3 = () => {
    return (
        <div className='Section3'>
            <Row>
                <Col xs={3}>
                    <div className='bar bar1'>
                    </div>
                </Col>
                <Col xs={3}>
                    <div className='bar bar2'>
                        <h4>Research & Analysis</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maiores iste error expedita rem suscipit?</p>
                    </div>
                </Col>
                <Col xs={3}>
                    <div className='bar bar3'>
                        <h4>Industry Development</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maiores iste error expedita rem suscipit?</p>
                    </div>
                </Col>
                <Col xs={3}>
                    <div className='bar bar4'>
                        <h4>Production Launch</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maiores iste error expedita rem suscipit?</p>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default Section3
