import { Fragment } from "react"
import FeturedPosts from "../commponed/Featured-Posts"
import Hero from '../commponed/hero'
import { getFeaturedPosts} from '../helper/posts-util'
 function HomePage(props) {
  return (
    <Fragment>
      <Hero/>
      <FeturedPosts posts={props.posts}/>
      {/* <FeaturedPosts/> */}
    </Fragment>
  )
}

export function getStaticProps(){
  const featuredPosts =getFeaturedPosts();
  return{ 
    props:{
      posts:featuredPosts
    }
  
  }
}

export default HomePage

