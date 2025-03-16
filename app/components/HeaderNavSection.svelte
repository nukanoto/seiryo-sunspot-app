<script lang="ts">
  import HeaderNavButton from "./HeaderNavButton.svelte"
  import type { NavInfo } from "./NavInfo"

  type HeaderNavSectionProps = {
    navInfos: NavInfo[]
  }

  let { navInfos }: HeaderNavSectionProps = $props()
</script>

<div class="scrollbar-none flex space-x-2 overflow-x-auto">
  {#each navInfos as navInfo}
    <HeaderNavButton {...navInfo} />
  {/each}
</div>
