import React from 'react'
import { Container } from 'react-bootstrap'
import './Landing.scss'
const Landing = (props) => {
    return (
        <div className="Landing">
            <div className="bgColor">
                <Container>
                    <h1>{props.title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, esse perferendis et iure magnam, quas officiis ipsam minima dolor reprehenderit molestias accusamus modi explicabo ducimus.</p>
                </Container>
            </div>
        </div>
    )
}

export default Landing
