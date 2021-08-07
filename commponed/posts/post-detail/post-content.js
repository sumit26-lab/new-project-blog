import React from 'react'
import PostHeade from './post-heade'
const Dummy_Post=[
    {
      slug:'getting-started-with-nextjs'
      ,title:'Get started Next,js'
      ,image:'next.js-Learning.png'
      ,content:'NextJS is a The React framwork for production -it make building fullstack React apps and sites a breez and ships with built-in Server side Rendering',
    date:'2021-02-10'
  },
  {
    slug:'getting-started-with-nextjs 2'
    ,title:'Get started Next,js'
    ,image:'next.js-Learning.png'
    ,content:'#NextJS is a The React framwork for production -it make building fullstack React apps and sites a breez and ships with built-in Server side Rendering',
  date:'2021-02-10'
  },
  {
    slug:'getting-started-with-nextjs 3'
    ,title:'Get started Next,js'
    ,image:'next.js-Learning.png'
    ,content:'#NextJS is a The React framwork for production -it make building fullstack React apps and sites a breez and ships with built-in Server side Rendering',
  date:'2021-02-10'
  }
  ]

function PostContent() {
    const imagepath=`/image/posts/${Dummy_Post.slug}/${Dummy_Post.image}`
    return (
        <article>
            <PostHeade title={Dummy_Post.title} image={imagepath}/>
            {Dummy_Post.content}
        </article>
    )
}

export default PostContent
