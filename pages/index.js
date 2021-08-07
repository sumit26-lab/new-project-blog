import { Fragment } from "react"
import FeturedPosts from "../commponed/Featured-Posts"
import Hero from '../commponed/hero'
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
 function HomePage() {
  return (
    <Fragment>
      <Hero/>
      <FeturedPosts posts={Dummy_Post}/>
      {/* <FeaturedPosts/> */}
    </Fragment>
  )
}
export default HomePage
