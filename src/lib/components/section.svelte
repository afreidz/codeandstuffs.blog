<script lang="ts">
  let invert = false;

  export { invert };
</script>

<section class:invert>
  <div>
    <slot />
  </div>
</section>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  section {
    font-size: 20px;
    line-height: 1.6;
    text-align: center;
    color: $color-neutral-100;
    background-color: $color-neutral-900;
    transform: skewY(-1 * $skew-level-100);
    padding: $spacing-level-400 $spacing-level-200;
  }

  div {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    max-width: 700px;
    min-width: 320px;
    transform: skewY($skew-level-100);
  }

  .invert {
    color: $color-neutral-900;
    background-color: $color-neutral-100;
  }
</style>
