<script lang="ts">
  import Paragraph from "./paragraph.svelte";
</script>

<Paragraph>
  <em><slot /></em>
</Paragraph>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  em {
    font-size: 22px;
    font-weight: 200;
    font-style: italic;
    color: $color-neutral-300;
  }
</style>
