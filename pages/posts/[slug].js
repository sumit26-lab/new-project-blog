import PostContent from "../../commponed/posts/post-detail/post-content"
import { getPostData, getPostsFiles } from "../../helper/posts-util";

function PostDetailPage(props){
    return <PostContent post={props.post}/>

}
export default PostDetailPage
// output there 1 hero => present ourselvers
//2 fetured post
export function getStaticProps(context){
    const{params}=context
    const{slug}=params;
    const postData=getPostData(slug);
    return{
        props:{
            post:postData
        },
        revalidate:600
    }
}
export function getStaticPaths(){
    const postfilenames = getPostsFiles();
    const slugs =postfilenames.map(fileName=>fileName.replace(/\.md$/,''))
    return{
        paths:slugs.map(slug=>({params:{slug:slug}})),
        fallback:false 
    }
}