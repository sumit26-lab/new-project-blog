import AllPost from "../../commponed/posts/all-post"
import { getAllPosts } from "../../helper/posts-util"
  

function AllPostsPage(props){
    return(
        <AllPost posts={props.posts}/>
    )
}

export function getStaticProps(){
  const allPosts =getAllPosts()
  return{
   props:{
     posts:allPosts
   }
  }
} 
export default AllPostsPage