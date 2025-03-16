<script lang="ts">
  import { getFiles } from "@/api/files"
  import AggCommon from "@/pages/butterfly/agg_common.svelte"

  const postUrl = "/api/butterfly/agg"

  const getFilesAgg = () => {
    return getFiles({ path: "out", glob: "*.parquet" })
  }
</script>

<AggCommon {postUrl} {getFilesAgg} />
