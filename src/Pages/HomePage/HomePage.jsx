import React from 'react'
import './HomePage.scss'
const Landing = React.lazy(() => import('./Landing/Landing'))
const Count = React.lazy(() => import('./Count/Count'))
const Video = React.lazy(() => import('./Video/Video'))
const Clients = React.lazy(() => import('./Clients/Clients'))
const About = React.lazy(() => import('./About/About'))
const Safety = React.lazy(() => import('./Safety/Safety'))
const Testimonials = React.lazy(() => import('./Testimonials/Testimonials'))
const GetInTouch = React.lazy(() => import('./GetInTouch/GetInTouch'))

const HomePage = () => {
    
    return (
        <div className='pages'>
            <Landing />
            <Count />
            <About />
            <Video />
            <Clients />
            <Testimonials />
            <Safety />
            <GetInTouch />
        </div>
    )
}

export default HomePage     