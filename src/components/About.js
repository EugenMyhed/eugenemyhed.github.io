import React from 'react'
import Menu from './Menu'


const About = ({ pathName }) => {
    const path = pathName.split('/')[1]

    return(
    <div>
        <Menu path={path} />
        <h1>About</h1>
    </div>
    )
}

export default About