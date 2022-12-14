import React from 'react'
import Clients from '../../Organisms/Clients/Clients'
import CountSection from './CountSection/CountSection'
import Landing from './Landing/Landing'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import VideoSection from './Video/VideoSection'

const AboutUs = () => {
    return (
        <div className='pages'>
            <Landing />
            <CountSection />
            <Section2 />
            <VideoSection />
            <Section3 />
            <Clients />
        </div>
    )
}

export default AboutUs
