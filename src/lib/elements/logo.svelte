<h1>
  <a href="/">
    <span>//</span>codeandstuffs<span>.blog</span>
  </a>
</h1>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 38px;
    line-height: 1;

    @include sm {
      & {
        font-size: 30px;
        text-align: center;
      }
    }

    @include md {
      & {
        font-size: 30px;
      }
    }
  }

  span {
    color: $color-highlight-500;
  }
</style>
