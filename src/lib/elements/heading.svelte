<h2>
  <slot />
</h2>

<style lang="scss">
  @use "$lib/tokens/scss" as *;
  h2 {
    font-family: "Roboto Serif", serif;
    font-size: 50px;
    line-height: 1;
    font-weight: 600;
    margin-bottom: $spacing-level-400;
  }
</style>
