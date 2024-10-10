<script lang="ts">
	import { onMount } from 'svelte';
	import { themes } from '$lib/themes';

	import CloseLarge from 'carbon-icons-svelte/lib/CloseLarge.svelte';

	let selectedTheme = themes[5];

	// Change theme function
	function changeTheme(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedTheme = target.value;
	}

	onMount(() => {
		if (typeof document !== 'undefined') {
			document.body.setAttribute('data-theme', selectedTheme);
		}
	});

	$: if (typeof document !== 'undefined') {
		document.body.setAttribute('data-theme', selectedTheme);
	}
</script>

<div class="drawer-side">
	<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"> </label>
	<aside class="menu bg-base-200 text-base-content min-h-full w-72 p-4 mt-0 relative">
		<label
			for="my-drawer-2"
			aria-label="close sidebar"
			class="absolute top-3 right-5 z-50 btn btn-ghost btn-circle drawer-overlay"
		>
			<CloseLarge size={20} />
		</label>

		<ul class="menu mt-8 rounded-box">
			<li class=""><a href="/">Home</a></li>
			<li class=""><a href="/about">About</a></li>
			<li class=""><a href="/cart">Cart</a></li>
			<li class=""><a href="/orders">Orders</a></li>
            
			<li class="mt-4">
				<select name="theme" id="theme" on:change={changeTheme} class="capitalize text-sm">
					{#each themes as theme}
						<option value={theme} selected={theme === selectedTheme}>{theme}</option>
					{/each}
				</select>
			</li>
		</ul>
	</aside>
</div>
