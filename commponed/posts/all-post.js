import React from 'react'
import classes from './all-posts.module.css'
import PostGrid from './posts-grid'

function AllPost(props) {
    return (
        <section className={classes.posts}>
        <h1>
            AllPosts
        </h1>
        <PostGrid posts={props.posts}/>
            
        </section>
    )
}

export default AllPost
