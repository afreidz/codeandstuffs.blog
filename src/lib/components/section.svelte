<script lang="ts">
  let invert = false;

  export { invert };
</script>


<style lang="scss">
  @use "$lib/tokens/scss" as *;
  $skew: 0.5deg;

  section {
    font-size: 20px;
    line-height: 1.6;
    font-weight: 300;
    text-align: center;
    color: $color-neutral-100;
    padding: $spacing-level-200;
    transform: skewY(-1 * $skew);
    padding-top: $spacing-level-400;
    background-color: $color-neutral-900;
    font-family: "IBM Plex Sans", sans-serif;
  }

  div {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    max-width: 700px;
    min-width: 320px;
    transform: skewY($skew);
  }


  .invert {
    color: $color-neutral-900;
    background-color: $color-neutral-100;
  }
</style>

<section class:invert={invert}>
  <div>
    <slot/>
  </div>
</section>
