<script lang="ts">
  /// <reference path="$lib/types/confetti.d.ts">
  import { Chip } from "$lib";
  import confetti from "canvas-confetti";
  import fp from "$lib/stores/fingerprint";

  let disabled = false;
  let metaView = true;
  let score = 0;

  async function appreciate() {
    disabled = true;
    const url = `${window.location}/appreciate`;

    try {
      await (
        await fetch(url, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fingerprint: $fp }),
        })
      ).json();
      score += 1;
      confetti();
    } catch (err) {
      console.error(err);
      disabled = false;
    }
  }

  export { score, metaView, disabled };
</script>

<Chip type="appreciate">
  <button {disabled} on:click={appreciate}>
    <span>♥</span>
    {#if metaView}
      <em>{score}</em>
    {:else if !disabled}Appreciate{/if}
  </button>
</Chip>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  button {
    cursor: pointer;
    padding: 0 $spacing-level-50;

    &:hover span,
    &:disabled span {
      color: $color-highlight-200;
    }
  }
</style>
