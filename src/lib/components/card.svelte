<script lang="ts">
  import { Heading, Date } from "$lib";
  import type { Metadata } from "$lib/types/post";

  let post: Metadata = null;
  export { post };
</script>

<a href={`posts/${post.slug}`}>
  <img src={post.image ? post.image : "/logo.png"} alt="clever representation of the post" />
  <header>
    <Heading level={3}>{post.title}</Heading>
    <Date stamp={post.date} />
  </header>
</a>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  a {
    display: flex;
    margin: $spacing-level-200 0;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 0.3rem;
    padding: $spacing-level-200;
    margin-right: $spacing-level-200;
    border: 1px solid $color-neutral-300;
  }
</style>
