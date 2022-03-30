<script lang="ts">
  let level = 2;

  export { level };
</script>

{#if level === 2}
  <h2>
    <slot />
  </h2>
{:else if level === 3}
  <h3>
    <slot />
  </h3>
{/if}

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  h2 {
    font-size: 50px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: $spacing-level-400;
    font-family: "Roboto Serif", serif;
  }

  h3 {
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    padding-top: $spacing-level-200;
    margin-bottom: $spacing-level-200;
    font-family: "Roboto Serif", serif;
  }
</style>
