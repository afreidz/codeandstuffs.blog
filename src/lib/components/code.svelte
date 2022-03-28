<style lang="scss">
  @use "$lib/tokens/scss" as *;

  .codeblock {
    border-radius: 0.3rem;
    background-color: white;
    box-shadow: $shadow-500;
    padding: $spacing-level-150;

    header {
      font-size: 0.8rem;
      text-align: right;
      margin-bottom: -1 * $spacing-level-150;
    }

    button {
      color: $color-highlight-400;
    }

    & :global(pre) {
      font-size: 0.8rem;
      font-weight: 400 !important;
      border-radius: 0 !important;
      font-family: "IBM Plex Mono", monospace !important;
    }
  }
</style>

<div class="codeblock">
  <header>
    <button>⬤</button>
  </header>
  <slot/>
</div>
