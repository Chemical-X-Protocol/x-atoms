<script lang="ts">
import type { Readable } from 'svelte/store';
import type { AsyncState } from '../../src/core';
import { useAsyncData, useDisposer, useSelfCleaningInterval } from '../../src/adapters/svelte';

interface Props {
  onCleanup: () => void;
  onTick: () => void;
  fetcher: () => Promise<string>;
  expose: (api: { data: Readable<AsyncState<string>> }) => void;
}

let { onCleanup, onTick, fetcher, expose }: Props = $props();

useDisposer(onCleanup);
useSelfCleaningInterval(onTick, 10, { immediate: true });
const data = useAsyncData(fetcher);
expose({ data });
</script>

<p class="host">{$data.isLoading ? 'loading' : $data.data}</p>
