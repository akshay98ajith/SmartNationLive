import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './List.scss'
import product1 from '../../../assets/product1.jpg'
import product2 from '../../../assets/product2.jpg'
import product3 from '../../../assets/product3.jpg'
import product4 from '../../../assets/product4.jpg'
import { Link } from 'react-router-dom'

const List = () => {
    return (
        <div className='ProductsList'>
            <Container>
                <Row>
                    <Col md={6} className='colNew'>
                        <img src={product1} alt="" className="img-fluid" />
                    </Col>
                    <Col md={6} className="ProductCards colNew">
                        <h4>Construction Sites</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci beatae, expedita tenetur voluptatibus id consectetur minima necessitatibus quod inventore officia vitae a culpa omnis! Expedita.</p>
                        {/* <Link to={`/Products/Service1`} className='btn '>Learn More</Link> */}
                    </Col>
                </Row>
                <Row className='flex-sm-row-reverse'>
                    <Col md={6} className='colNew'>
                        <img src={product2} alt="" className="img-fluid" />
                    </Col>
                    <Col md={6} className='ProductCards colNew'>
                        <h4>Factories and Warehouse</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci beatae, expedita tenetur voluptatibus id consectetur minima necessitatibus quod inventore officia vitae a culpa omnis! Expedita.</p>
                        {/* <Link to={`/Products/Service2`} className='btn '>Learn More</Link> */}
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='colNew'>
                        <img src={product3} alt="" className="img-fluid" />
                    </Col>
                    <Col md={6} className='ProductCards colNew'>
                        <h4>Mines</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci beatae, expedita tenetur voluptatibus id consectetur minima necessitatibus quod inventore officia vitae a culpa omnis! Expedita.</p>
                        {/* <Link to={`/Products/Service3`} className='btn '>Learn More</Link> */}
                    </Col>
                </Row>
                <Row className='flex-sm-row-reverse'>
                    <Col md={6} className='colNew'>
                        <img src={product4} alt="" className="img-fluid" />
                    </Col>
                    <Col md={6} className='ProductCards colNew'>
                        <h4>Oil & Gas</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci beatae, expedita tenetur voluptatibus id consectetur minima necessitatibus quod inventore officia vitae a culpa omnis! Expedita.</p>
                        {/* <Link to={`/Products/Service4`} className='btn '>Learn More</Link> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default List
