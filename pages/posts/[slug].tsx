import Head from "next/head";
import { useState } from "react";
import PostContext from "$contexts/post";
import * as Components from "$components";
import { getBySlug } from "$scripts/posts";
import { MDXRemote} from "next-mdx-remote";

const components = {
  ...Components, 
  a: Components.Link,
  pre: Components.Code,
  p: Components.Paragraph,
  strong: Components.Strong,
  h1: Components.Headings.h1,
  h2: Components.Headings.h2,
  h3: Components.Headings.h3,
  h4: Components.Headings.h4,
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const source = await getBySlug(slug);
  return { props: { source } };
}


export default function Post({ source }) {
  const [post, setPost] = useState(source.scope.slug);
  const [likes, setLikes] = useState(source.scope.likes);

    return (
    <>
      <Head>
        <title>{source.frontmatter.title} - Code and Stuffs</title>
        <meta name="description" content={source.frontmatter.teaser} />
        <meta property="og:title" content={source.frontmatter.title} />
        <meta property="og:description" content={source.frontmatter.teaser} />
        <meta property="og:url" content={`https://codeandstuffs.blog/posts/${post}`} />
      </Head>
      <PostContext.Provider value={{ post, setPost, likes, setLikes }}>
        <Components.Section>
          <Components.Meta {...source.frontmatter} />
        </Components.Section>
        <MDXRemote {...source} components={components} />
        <Components.Section>
          <Components.Like/>
        </Components.Section>
      </PostContext.Provider>
    </>
  )
}
