import React from 'react'
import Menu  from './Menu'


const HomePage = ({pathName}) => (
    <div>
        <Menu path={pathName} />
        <h1>Home Page</h1>
    </div>
)

export default HomePage