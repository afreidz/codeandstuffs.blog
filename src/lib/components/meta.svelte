<script lang="ts">
  import { Date, Paragraph } from "$lib";

  let tags: string[];
  let feeling = "";
  let date = 0;

  export { tags, feeling, date };
</script>

<Paragraph>
  <ul class="meta">
    {#if feeling}
      <li>Feeling: {feeling}</li>
    {/if}
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
    {#if date}
      <li>
        Posted: <Date stamp={date} />
      </li>
    {/if}
    <!-- <li class="inline first">👍 : 0</li>
<li class="inline">👎 : 0</li> -->
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

    .inline {
      display: inline-block;
    }

    span {
      font-weight: 600;
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

    .first {
      background-color: $color-highlight-370;
    }
  }
</style>
