import React from 'react'
import classess from './feature-posts.module.css'
import PostGrid from './posts/posts-grid'

function FeturedPosts(props) {
    return (
        <section className={classess.latest}>
        <h2>FeaturedPosts</h2>
        <PostGrid posts={props.posts}/>
            
        </section>
    )
}

export default FeturedPosts
