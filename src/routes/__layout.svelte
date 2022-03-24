<script>
  import Logo from "$lib/elements/logo.svelte";
  import "the-new-css-reset/css/reset.css"
  import "@fontsource/permanent-marker"; 
  import "@fontsource/ibm-plex-mono";
  import "@fontsource/ibm-plex-sans/300.css";
  import "@fontsource/roboto-serif/600.css";
</script>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  :global {
    html,body {
      background-color: $color-neutral-900;
      color: $color-neutral-100;
    }
  }

  header {
    padding: $spacing-level-200;
    margin-bottom: $spacing-level-200;
  }
</style>

<header>
  <Logo/>
</header>

<main>
  <slot></slot>
</main>



