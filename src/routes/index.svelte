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
  import Link from "$lib/elements/link.svelte";
  import Heading from "$lib/elements/heading.svelte";
  import Section from "$lib/components/section.svelte";
  import Paragraph from "$lib/elements/paragraph.svelte";

  interface Metadata {
    date: number;
    slug: string;
    title: string;
    teaser: string;
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
    
    <Heading>{posts.main.title}</Heading>
    <Paragraph>{posts.main.teaser}</Paragraph>
    <Paragraph>&hellip;</Paragraph>
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
