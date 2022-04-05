<script>
  import { Logo } from "$lib";
  import "@fontsource/ibm-plex-mono/400.css";
  import "@fontsource/ibm-plex-mono/700.css";
  import "@fontsource/ibm-plex-mono/400-italic.css";
  import "@fontsource/ibm-plex-mono/700-italic.css";
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
  @use "$lib/fonts.css" as *;

  :global {
    html,
    body {
      color: $color-neutral-100;
      font-family: "Bariol", sans-serif;
      background-color: $color-neutral-900;
    }

    body {
      margin-top: -15px;
    }

    strong {
      font-weight: 800;
      color: $color-highlight-300;
    }
  }

  header {
    top: -15px;
    z-index: 1;
    position: sticky;
    padding: $spacing-level-200;
    background-color: $color-neutral-900;
    transform: skewY(-1 * $skew-level-100);

    & :global(h1) {
      transform: skewY($skew-level-100);
    }
  }
</style>
