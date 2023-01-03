import React from 'react'
import { Suspense } from 'react'
const Landing = React.lazy(() => import('./Landing/Landing'))
const List = React.lazy(() => import('./List/List'))
const Products = () => {
    return (
        <div className='pages'>
            <Suspense fallback={<></>}>
                <Landing />
            </Suspense>
            <Suspense fallback={<></>}>
                <List />
            </Suspense>
        </div>
    )
}

export default Products
