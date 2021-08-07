import React from 'react'
import Link from 'next/link';
import classes from  '../posts/post-item.module.css';
import Image from 'next/image'

function PostItem(props){ 
const{title,image,excerpt,date,slug}=props.post;
const fromatedate= new Date(date).toLocaleDateString('en-US',{
    day:'numeric',
    month:'long',
    year:'numeric',
});
const imagePath=`/image/posts/${slug}/${image}`;
const linkPath=`/posts/${slug}`;
return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                <div className={classes.image}>
                <Image src={imagePath} alt={title} height={200} width={300} layout="responsive"/>

                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{fromatedate}</time>
                    <p>{excerpt}</p>
                </div>

                </a>
            </Link>
        </li>
    )
}

export default PostItem
