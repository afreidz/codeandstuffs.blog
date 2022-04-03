<script context="module" lang="ts">
  export async function load({ fetch }) {
    const resp = await fetch("/posts");

    return {
      status: resp.status,
      props: {
        posts: resp.ok && (await resp.json()),
      },
    };
  }
</script>

<script lang="ts">
  import { Link, Date, Teaser, Section, Heading } from "$lib";

  interface Metadata {
    date: number;
    slug: string;
    title: string;
    tags: string[];
    teaser: string;
    feeling: string;
  }

  interface Posts {
    main: Metadata;
    others: Metadata[];
  }

  let posts: Posts = {
    main: null,
    others: [],
  };

  export { posts };
</script>

<svelte:head>
  <title>Code and Stuffs</title>
</svelte:head>

{#if posts.main}
  <Section>
    <Date stamp={posts.main.date} />
    <Heading>{posts.main.title}</Heading>
    <Teaser>{posts.main.teaser}</Teaser>
    <Link href={`posts/${posts.main.slug}`}>Read More</Link>
  </Section>
{/if}

{#if posts.others}
  <ul>
    {#each posts.others as post}
      <li><a href={`posts/${post.slug}`}>{post.title}</a></li>
    {/each}
  </ul>
{/if}
