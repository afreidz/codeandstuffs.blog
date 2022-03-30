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
  @use "./styles.scss" as *;
</style>
