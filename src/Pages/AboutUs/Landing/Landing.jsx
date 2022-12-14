import React from 'react'
import { Container } from 'react-bootstrap'
import './Landing.scss'

const Landing = () => {
    return (
        <div className='aboutLanding'>
            <div className="bgColor">
                <Container>
                    <h1>About Us</h1>
                    <p>AnchoRock Solutions is a construction safety software company helping improve jobsite safety, compliance, and digital safety management for construction companies around the U.S. since 2018. We believe that technology should make life easier for those working in the field so we strive to provide a platform that's as easy to use as it is time-saving.</p>
                </Container>
            </div>
        </div>
    )
}

export default Landing
