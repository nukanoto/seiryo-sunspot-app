<script lang="ts">
  import Header from "@/components/Header.svelte"

  import "../style.css"

  let currentPath = $state("")
  $effect(() => {
    currentPath = document.location.pathname
  })

  /** @type {{children: import('svelte').Snippet}} */
  let { children } = $props()
</script>

<Header {currentPath} />

<main>
  {@render children()}
</main>
