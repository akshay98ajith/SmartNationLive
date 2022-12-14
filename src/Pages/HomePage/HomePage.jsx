import React, { Suspense } from 'react'
import './HomePage.scss'
const Landing = React.lazy(() => import('./Landing/Landing'))
const Count = React.lazy(() => import('./Count/Count'))
const Video = React.lazy(() => import('./Video/Video'))
const Clients = React.lazy(() => import('../../Organisms/Clients/Clients'))
const About = React.lazy(() => import('./About/About'))
const Safety = React.lazy(() => import('./Safety/Safety'))
const Testimonials = React.lazy(() => import('./Testimonials/Testimonials'))
const GetInTouch = React.lazy(() => import('../../Organisms/GetInTouch/GetInTouch'))

const HomePage = () => {

    return (
        <div className='pages'>
            <Suspense fallback={<div>Loading</div>}>
                <Landing />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <Count />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <About />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <Video />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <Clients />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <Testimonials />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <Safety />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <GetInTouch />
            </Suspense>
        </div>
    )
}

export default HomePage     