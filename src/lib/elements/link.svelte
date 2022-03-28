<script lang="ts">
  let href = "/";
  export { href };
</script>

<a {href}><slot /></a>

<style lang="scss">
  @use "$lib/tokens/scss" as *;
  $undercurl: underline wavy $color-highlight-500 1px;

  a {
    font-weight: 600;
    position: relative;
    display: inline-block;
    color: $color-highlight-525;
    text-underline-offset: 0.25em;
    transition: color $transition-100;

    &:hover {
      color: $color-neutral-100;
      text-decoration: $undercurl;
    }

    @media (hover: none) {
      & {
        color: $color-neutral-100;
        text-decoration: $undercurl;
      }
    }
  }
</style>
