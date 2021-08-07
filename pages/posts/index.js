import AllPost from "../../commponed/posts/all-post"
const Dummy_Post=[
    {
      slug:'getting-started-with-nextjs'
      ,title:'Get started Next,js'
      ,image:'next.js-Learning.png'
      ,excerpt:'NextJS is a The React framwork for production -it make building fullstack React apps and sites a breez and ships with built-in Server side Rendering',
    date:'2021-02-10'
  },
  {
    slug:'getting-started-with-nextjs 2'
    ,title:'Get started Next,js'
    ,image:'next.js-Learning.png'
    ,excerpt:'NextJS is a The React framwork for production -it make building fullstack React apps and sites a breez and ships with built-in Server side Rendering',
  date:'2021-02-10'
  },
  {
    slug:'getting-started-with-nextjs 3'
    ,title:'Get started Next,js'
    ,image:'next.js-Learning.png'
    ,excerpt:'NextJS is a The React framwork for production -it make building fullstack React apps and sites a breez and ships with built-in Server side Rendering',
  date:'2021-02-10'
  }
  ]
  

function AllPostsPage(){
    return(
        <AllPost posts={Dummy_Post}/>
    )
}

export default AllPostsPage