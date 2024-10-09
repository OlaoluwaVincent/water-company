<script lang="ts">
	import { onMount } from 'svelte';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import { themes } from '$lib/themes';
	let selectedTheme = themes[11];

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

	// Make sure the body has the correct theme
	$: if (typeof document !== 'undefined') {
		document.body.setAttribute('data-theme', selectedTheme);
	}
</script>

<nav class="navbar bg-base-100 drop-shadow-md">
	<label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button" >
		<Menu size={32} />
	</label>

	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">EverFlow</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/about" class="link">About</a></li>
			<li><a href="/documentation" class="link" rel="noopener noreferrer">
                Documentation
              </a></li>
			<li>
				<select name="theme" id="theme" on:change={changeTheme} class="link capitalize text-sm">
					{#each themes as theme}
						<option value={theme} selected={theme === selectedTheme}>{theme}</option>
					{/each}
				</select>
			</li>
		</ul>
	</div>
</nav>
