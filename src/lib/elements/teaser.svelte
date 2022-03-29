<script lang="ts">
  import Paragraph from "./paragraph.svelte";
</script>

<Paragraph>
  <em><slot /></em>
</Paragraph>

<style>
  em {
    font-style: italic;
  }
</style>
