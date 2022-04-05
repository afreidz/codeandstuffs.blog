<script lang="ts">
  let level = 2;
  let jump: string | null = null;

  export { level, jump };
</script>

{#if level === 2}
  <h2 id={jump}>
    <slot />
    {#if jump}<a href="#{jump}">🔗</a>{/if}
  </h2>
{:else if level === 3}
  <h3 id={jump}>
    <slot />
    {#if jump}<a href="#{jump}">🔗</a>{/if}
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

    > a {
      display: none;
    }
    &:hover > a {
      display: initial;
    }
  }

  h3 {
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    padding-top: $spacing-level-200;
    margin-bottom: $spacing-level-200;
    font-family: "Roboto Serif", serif;

    > a {
      display: none;
    }
    &:hover > a {
      display: initial;
    }
  }

  @media (hover: none) {
    h2 > a,
    h3 > a {
      display: initial;
    }
  }
</style>
