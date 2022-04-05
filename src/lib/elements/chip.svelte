<script lang="ts">
  let type = null;

  export { type };
</script>

<span class={type}><slot /></span>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  span {
    font-weight: 600;
    border-radius: 0.3rem;
    display: inline-block;
    color: $color-neutral-100;
    padding: 0 $spacing-level-50;
    margin-left: $spacing-level-50;
    background-color: $color-neutral-300;
  }

  .new {
    background-color: $color-highlight-400;
  }

  .code {
    background-color: $color-highlight-500;
  }

  .stuffs,
  .svelte {
    background-color: $color-highlight-600;
  }

  .first,
  .design-system {
    background-color: $color-highlight-370;
  }

  .appreciate,
  .react {
    background-color: $color-highlight-700;
  }
</style>
