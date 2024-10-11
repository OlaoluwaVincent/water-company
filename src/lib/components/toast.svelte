<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let toast: string;
	export let toastType: string = 'info';

	const dispatch = createEventDispatcher();

	onMount(() => {
		const timeout = setTimeout(() => {
			dispatch('clearToast');
		}, 3000);

		return () => clearTimeout(timeout);
	});
</script>

<div class="toast toast-top toast-center">
	<div class={`alert alert-${toastType} text-white font-bold`}>
		<span>{toast}</span>
	</div>
</div>
