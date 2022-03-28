<script lang="ts">
  let maximized = false;
  let portal: HTMLElement;
  let code: HTMLElement;

  function toggle() {
    if (!maximized) {
      maximized = true;
      document.body.appendChild(code);
    } else {
      maximized = false;
      portal.appendChild(code);
    }
  }
</script>

<div class="portal" bind:this={portal}>
  <div class="codeblock" bind:this={code} class:maximized>
    <header>
      <button on:click={toggle}>⬤</button>
    </header>
    <slot />
  </div>
</div>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  .codeblock {
    border-radius: 0.3rem;
    box-shadow: $shadow-500;
    padding: $spacing-level-150;
    background-color: $color-neutral-75;

    &.maximized {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      position: fixed;
    }

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
    @include sm {
      header,
      & :global(pre) {
        font-size: 1.2rem;
      }
    }
    @include md {
      header,
      & :global(pre) {
        font-size: 1rem;
      }
    }
  }
</style>
