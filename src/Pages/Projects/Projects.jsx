import React from 'react'
import Book from './Book/Book'
import Landing from './Landing/Landing'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'

const Projects = () => {
    return (
        <div className='pages'>
            <div className='projectPage'>
                <Landing />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Book />
            </div>
        </div>
    )
}

export default Projects
