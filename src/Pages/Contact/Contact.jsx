import React from 'react'
import { Suspense } from 'react'
import ContactSection from './ContactSection/ContactSection'
const Landing = React.lazy(() => import('./Landing/Landing'))
const GetInTouch = React.lazy(() => import('../../Organisms/GetInTouch/GetInTouch'))
const Contact = () => {
    return (
        <div className='pages'>
            <Suspense fallback={<div>Loading</div>}>
                <Landing />
            </Suspense>
            <ContactSection />
            <Suspense fallback={<div>Loading</div>}>
                <GetInTouch />
            </Suspense>
        </div>
    )
}

export default Contact
