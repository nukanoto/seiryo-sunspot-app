<script lang="ts">
  import clsx from "clsx"
  import type { NavInfo } from "./NavInfo"

  type HeaderNavButtonProps = NavInfo

  let { href, name, isCurrentPage }: HeaderNavButtonProps = $props()
</script>

<a
  {href}
  class={clsx(
    "block whitespace-nowrap border-b-4 px-4 py-2 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none",
    isCurrentPage ? "border-blue-300" : "border-gray-300"
  )}
>
  {name}
</a>
