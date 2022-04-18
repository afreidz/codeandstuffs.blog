import Head from "next/head";
import { useState } from "react";
import * as Components from "$components";
import { MDXRemote} from "next-mdx-remote";
import AppContext from "$scripts/stores/app";
import { getBySlug, getByLimit } from "$scripts/posts";

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

export async function getStaticProps({ params }) {
  const { slug } = params;
  const source = await getBySlug(slug);
  return { props: { source } };
}

export async function getStaticPaths() {
  const posts = await getByLimit(null);
  return {
    paths: posts.map(p => ({ params: { slug: p.scope.slug } })),
    fallback: false,
  }
}


export default function Post({ source }) {
  const [post, setPost] = useState(source.scope.slug);

  return (
    <>
      <Head>
        <title>{source.frontmatter.title} - Code and Stuffs</title>
        <meta name="description" content={source.frontmatter.teaser} />
        <meta property="og:title" content={source.frontmatter.title} />
        <meta property="og:description" content={source.frontmatter.teaser} />
        <meta property="og:url" content={`https://codeandstuffs.blog/posts/${post}`} />
      </Head>
      <AppContext.Provider value={{ post, setPost }}>
        <Components.Section>
          <Components.Meta {...source.frontmatter} slug={source.scope.slug} />
        </Components.Section>
        <MDXRemote {...source} components={components} />
        <Components.Section>
          <Components.Like/>
        </Components.Section>
      </AppContext.Provider>
    </>
  )
}
