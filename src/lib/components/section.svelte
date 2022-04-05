<script lang="ts">
  let invert = false;
  let bleed = false;

  export { invert, bleed };
</script>

<section class:invert>
  {#if bleed}
    <slot />
  {:else}
    <div><slot /></div>
  {/if}
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
