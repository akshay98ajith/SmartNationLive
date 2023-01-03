import React from 'react'
import { Suspense } from 'react'
const Login = React.lazy(() => import('./Login/Login'))
const User = React.lazy(() => import('./User/User'))

const Auth = () => {
    return (
        <div>
            {sessionStorage.getItem('token') ?
                <Suspense fallback={<></>}>
                    <User />
                </Suspense>
                :
                <Suspense fallback={<></>}>
                    <Login />
                </Suspense>
            }
        </div>
    )
}

export default Auth
