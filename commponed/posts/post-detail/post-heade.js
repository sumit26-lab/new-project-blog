import React from 'react'
import Image from 'next/image'
import classes from './post-header.module.css'
function PostHeade(props) {
    const{title,image}=props
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image src={image} width={200} height={150} />
        </header>
    )
}

export default PostHeade
