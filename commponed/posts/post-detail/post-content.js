import React from 'react'
import PostHeade from './post-heade'
import Styless from './post-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

function PostContent(props) {
  const{post}=props; 
    const imagepath=`/image/posts/${post.slug}/${post.image}`
    const CustomRender={
      image(image){
        return (
        <Image src={`/image/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
        )
      }
    }
    return (
        <article className={Styless.content}>
            <PostHeade title={post.title} image={imagepath}/>
          <ReactMarkdown renderers={CustomRender}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent
