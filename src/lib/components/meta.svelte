<script lang="ts">
  import { Paragraph } from "$lib";
</script>

<Paragraph>
  <ul class="meta">
    <li>
      Feeling: <slot name="feeling" />
    </li>
    <li>
      Tags: <slot name="tags" />
    </li>
    <li>
      Appreciation: <slot name="appreciations" />
    </li>
  </ul>
</Paragraph>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  .meta {
    font-size: 0.9rem;
    color: $color-neutral-300;
    margin-bottom: $spacing-level-400;

    & > li {
      margin-top: $spacing-level-100;
    }
  }
</style>
