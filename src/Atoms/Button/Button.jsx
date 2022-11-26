import React from 'react'

const Button = (props) => {
    return (
        <>
            <button className='btn button px-5 py-3 rounded-0 m-auto m-md-0 text-nowrap mb-5 mb-sm-0' style={{ width: "fit-content" }}>
                {props.label}
            </button>
        </>
    )
}

export default Button