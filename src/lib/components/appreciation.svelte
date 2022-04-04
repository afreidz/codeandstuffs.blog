<script lang="ts">
  /// <reference path="$lib/types/confetti.d.ts">
  import { Chip } from "$lib";
  import confetti from "canvas-confetti";
  import fp from "$lib/stores/fingerprint";
  import type Appreciation from "$lib/types/appreciation";
  import { score, appreciations, disabled } from "$lib/stores/appreciations";

  let metaView = true;
  let post = null;
  let url = "";

  $: {
    if (post) {
      url = `/posts/${post}/appreciate`;
    }
    if ($fp && post && !$appreciations) {
      (async () => {
        $appreciations = await (await fetch(url)).json();
        $disabled = !!$appreciations.find((a: Appreciation) => a.fingerprint === $fp);
        $score = $appreciations.length;
      })();
    }
  }

  async function appreciate(e: MouseEvent) {
    $disabled = true;
    try {
      await (
        await fetch(url, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fingerprint: $fp }),
        })
      ).json();
      $score += 1;
      confetti({
        origin: { x: e.clientX / e.view.innerWidth, y: e.clientY / e.view.innerHeight },
      });
    } catch (err) {
      console.error(err);
      $disabled = false;
    }
  }

  export { post, metaView };
</script>

<Chip type="appreciate">
  {#await $appreciations}
    loading...
  {:then}
    <button disabled={$disabled} on:click={appreciate} title="appreciate this post">
      <i />
      {#if metaView}
        <em>{$score}</em>
      {:else if !$disabled}Appreciate{/if}
    </button>
  {/await}
</Chip>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  button {
    cursor: pointer;
    padding: 0 $spacing-level-50;

    i::after {
      content: "🤍";
      display: inline-block;
      margin-right: $spacing-level-50;
    }

    &:hover i::after,
    &:disabled i::after {
      content: "❤️";
    }
  }
</style>
