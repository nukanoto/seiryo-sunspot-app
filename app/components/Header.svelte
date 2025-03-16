<script lang="ts">
  import {
    convertPageMapToNavInfos,
    extractNavInfoSectionsByPath,
  } from "./NavInfo"

  import HeaderNavSection from "./HeaderNavSection.svelte"
  import { pageMap } from "@/utils/pageMap"

  interface HeaderProps {
    currentPath: string
  }

  let { currentPath }: HeaderProps = $props()

  const navInfos = convertPageMapToNavInfos(pageMap, currentPath)
  const navInfoSections = extractNavInfoSectionsByPath(navInfos, currentPath)
</script>

<header class="mb-4 px-8">
  <nav class="space-y-1">
    {#each navInfoSections as navInfos}
      <HeaderNavSection {navInfos} />
    {/each}
  </nav>
</header>
