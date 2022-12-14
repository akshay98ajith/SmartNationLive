import React from 'react'
import './DetailPage.scss'
import Landing from './Landing/Landing'

const DetailPage = (props) => {
    return (
        <div className="pages">
            <div className='DetailPage'>
                <Landing title={props.title} />
            </div>
        </div>
    )
}

export default DetailPage
