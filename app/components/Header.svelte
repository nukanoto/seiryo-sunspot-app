<header class="mb-4 px-8">
  <nav class="space-y-1">
    {#each paths as navs}
      <div class="scrollbar-none flex space-x-2 overflow-x-auto">
        {#each navs as nav}
          <a
            href={nav.path}
            class={clsx(
              "block whitespace-nowrap border-b-4 px-4 py-2 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none",
              nav.selected ? "border-blue-300" : "border-gray-300"
            )}
          >
            {nav.name}
          </a>
        {/each}
      </div>
    {/each}
  </nav>
</header>
