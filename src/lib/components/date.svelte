<script lang="ts">
  import { Chip } from "$lib";

  let stamp: number = +new Date();
  let formatted = "";
  let isNew = false;

  const week = 6.048e8;
  const now = +new Date();

  $: formatted = new Date(stamp).toLocaleString();
  $: isNew = now - stamp < week;

  export { stamp };
</script>

<em>
  {#if isNew}<Chip type="new">new</Chip>{/if}
  Posted: {formatted}
</em>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  em {
    font-size: 0.9rem;
    display: inline-block;
    color: $color-neutral-300;
    margin-bottom: $spacing-level-200;
  }
</style>
