import React from "react";
import PostHeade from "./post-heade";
import Styless from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const { post } = props;
  const imagepath = `/image/posts/${post.slug}/${post.image}`;
  const CustomRenders = {
    //  image(image){
    //    return <Image src={`/image/posts/${post.slug}/${image.src}`}
    //    width={600}
    //     height={300}
    //      alt={image.alt}

    //      />
    //  },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={Styless.image}>
            <Image
              src={`/image/posts/${post.slug}/${image.url}`}
              width={600}
              height={300}
              alt={image.alt}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
   code(code) {
      const { language, value } = code;
      console.log('value',value)
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      );
    },
  };
  return (
    <article className={Styless.content}>
      <PostHeade title={post.title} image={imagepath} />
      <ReactMarkdown renderes={CustomRenders}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
