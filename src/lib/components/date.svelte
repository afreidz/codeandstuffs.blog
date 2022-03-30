<script lang="ts">
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
  {#if isNew}<span>new</span>{/if}
  {formatted}
</em>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  em {
    font-size: 0.9rem;
    display: inline-block;
    color: $color-neutral-300;
  }

  span {
    line-height: 1.5;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 0.3rem;
    display: inline-block;
    color: $color-neutral-100;
    padding: 0 $spacing-level-50;
    background-color: $color-highlight-400;
  }
</style>
