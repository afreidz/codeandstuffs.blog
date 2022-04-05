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
  import type { Metadata } from "$lib/types/post";
  import { Link, Date, Teaser, Section, Heading, Card } from "$lib";

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
    <Heading><a href={`posts/${posts.main.slug}`}>{posts.main.title}</a></Heading>
    <Teaser>{posts.main.teaser}</Teaser>
    <Link href={`posts/${posts.main.slug}`}>Read More</Link>
  </Section>
{/if}

{#if posts.others}
  <Section invert={true}>
    <em>Other Posts</em>
    <ul>
      {#each posts.others as post}
        <li>
          <Card {post} />
        </li>
      {/each}
    </ul>
  </Section>
{/if}

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  em {
    display: block;
    margin-bottom: $spacing-level-400;
  }
</style>
