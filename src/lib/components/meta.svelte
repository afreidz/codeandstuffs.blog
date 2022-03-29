<script lang="ts">
  let tags: string[];
  let feeling = "";

  export { tags, feeling };
</script>

<ul class="meta">
  <li>Feeling: {feeling}</li>
  <li>
    {#if tags}
      Tags:
      <ul class="inline">
        {#each tags as tag}
          <li class="inline"><span class={tag}>{tag}</span></li>
        {/each}
      </ul>
    {/if}
  </li>
  <!-- <li class="inline first">👍 : 0</li>
  <li class="inline">👎 : 0</li> -->
</ul>

<style lang="scss">
  @use "$lib/tokens/scss" as *;

  .meta {
    font-size: 0.9rem;
    color: $color-neutral-300;
    margin-bottom: $spacing-level-400;

    & > li {
      margin-top: $spacing-level-100;
    }

    .inline {
      display: inline-block;
    }

    .first {
      margin-right: $spacing-level-200;
    }

    span {
      font-weight: 600;
      font-size: 0.8rem;
      border-radius: 0.3rem;
      display: inline-block;
      color: $color-neutral-100;
      padding: 0 $spacing-level-50;
      margin-left: $spacing-level-50;
      background-color: $color-neutral-300;
    }

    .code {
      background-color: $color-highlight-500;
    }

    .stuffs {
      background-color: $color-highlight-600;
    }
  }
</style>
