import { getByLimit } from "scripts/posts";
import { Meta, Section } from "$components";
import { Props as PostMeta } from "$components/meta";

export async function getServerSideProps() {
  const posts = await getByLimit(10);
  const main = posts.shift();

  return {
    props: { main, posts },
  };
}

export interface Post {
  frontmatter?: PostMeta;
  scope: {
    slug: string;
  };
}

export default function Index({ main, posts }) {
  return (
    <>
      <Section>
        <Meta variant="teaser" {...main.frontmatter} slug={main.scope.slug} />
      </Section>
      {posts.length > 0 && (
        <Section invert={true}>
          {posts.map((post: Post) => (
            <Meta
              variant="search"
              {...post.frontmatter}
              slug={post.scope.slug}
              key={post.scope.slug}
            />
          ))}
        </Section>
      )}
    </>
  );
}
