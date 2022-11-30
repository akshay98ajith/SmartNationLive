import React from 'react'
import { motion } from 'framer-motion'
const Button = (props) => {
    return (
        <>
            <motion.button className='btn button px-5 py-3 rounded-0 m-auto m-md-0 text-nowrap mb-5 mb-sm-0' style={{ width: "fit-content" }} initial={{ opacity: 0, skewY: 5, translateY: 50 }} whileInView={{ opacity: 1, skewY: 0, translateY: 0 }} viewport={{ once: true }}>
                {props.label}
            </motion.button>
        </>
    )
}

export default Button