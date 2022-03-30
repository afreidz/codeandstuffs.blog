<p>
  <slot />
</p>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  p {
    font-size: 20px;
    line-height: 1.8;
    font-weight: 400;
    margin-bottom: $spacing-level-400;
  }
</style>
