import React from 'react'
import { Container } from 'react-bootstrap'
import img from '../../../assets/aboutVideoImg.png'
import './VideoSection.scss'
import playBtn from '../../../assets/play.svg'
const VideoSection = () => {
    return (
        <div className='aboutVideo'>
            <Container className='text-center'>
                <img src={img} alt="" className="img-fluid" />
                <div className="playBtn">
                    <img src={playBtn} alt="" className="img-fluid" />
                </div>
            </Container>
        </div>
    )
}

export default VideoSection 
