<script lang="ts">
  let href = "/";
  export { href };
</script>

<a {href}><slot /></a>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  a {
    font-weight: 600;
    position: relative;
    display: inline-block;

    &:before {
      z-index: -1;
      content: "";
      opacity: 0.5;
      top: 0;
      bottom: 0;
      left: -3px;
      right: -5px;
      position: absolute;
      transition: opacity $transition-100;
      background-color: $color-highlight-500;
      transform: skewX(-1 * $skew-level-500);
    }

    &:hover {
      text-decoration: underline;
    }

    &:hover:before {
      opacity: 0;
    }
  }
</style>
