import React from 'react'
import Menu from './Menu'

const Blog = ({ pathName }) => {
    const path = pathName.split('/')[1]
    return(
        <div>
            <Menu path={path} />
            <h1>Blog</h1>
        </div>
    )
}

export default Blog