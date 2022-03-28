<script>
  import Logo from "$lib/elements/logo.svelte";
  import "@fontsource/ibm-plex-sans/300.css";
  import "@fontsource/ibm-plex-sans/600.css";
  import "@fontsource/ibm-plex-mono/400.css";
  import "@fontsource/roboto-serif/600.css";
  import "the-new-css-reset/css/reset.css";
  import "@fontsource/permanent-marker";
</script>

<header>
  <Logo />
</header>

<main>
  <slot />
</main>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  :global {
    html,
    body {
      color: $color-neutral-100;
      background-color: $color-neutral-900;
    }
  }
  
  header {
    top: 0;
    z-index: 1;
    position: sticky;
    padding: $spacing-level-200;
    margin-bottom: $spacing-level-200;
    background-color: $color-neutral-900;
  }
</style>
