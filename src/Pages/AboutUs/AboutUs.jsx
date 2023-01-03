import React from 'react'
import { Suspense } from 'react'
const CountSection = React.lazy(() => import('./CountSection/CountSection'))
const Landing = React.lazy(() => import('./Landing/Landing'))
const Section2 = React.lazy(() => import('./Section2/Section2'))
const Section3 = React.lazy(() => import('./Section3/Section3'))
const VideoSection = React.lazy(() => import('./Video/VideoSection'))

const AboutUs = () => {
    return (
        <div className='pages'>
            <Suspense fallback={<></>}>
                <Landing />
            </Suspense>
            <Suspense fallback={<></>}>
                <CountSection />
            </Suspense>
            <Suspense fallback={<></>}>
                <Section2 />
            </Suspense>
            <Suspense fallback={<></>}>
                <VideoSection />
            </Suspense>
            <Suspense fallback={<></>}>
                <Section3 />
            </Suspense>
        </div>
    )
}

export default AboutUs
