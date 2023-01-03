import React, { Suspense } from 'react'
import './HomePage.scss'
const Landing = React.lazy(() => import('./Landing/Landing'))
const Count = React.lazy(() => import('./Count/Count'))
const Video = React.lazy(() => import('./Video/Video'))
const About = React.lazy(() => import('./About/About'))
const Safety = React.lazy(() => import('./Safety/Safety'))
const GetInTouch = React.lazy(() => import('../../Components/GetInTouch/GetInTouch'))

const HomePage = () => {

    return (
        <div className='pages'>
            <Suspense fallback={<></>}>
                <Landing />
            </Suspense>
            <Suspense fallback={<></>}>
                <Count />
            </Suspense>
            <Suspense fallback={<></>}>
                <About />
            </Suspense>
            <Suspense fallback={<></>}>
                <Video />
            </Suspense>
            <Suspense fallback={<></>}>
                <Safety />
            </Suspense>
            <Suspense fallback={<></>}>
                <GetInTouch />
            </Suspense>
        </div>
    )
}

export default HomePage     