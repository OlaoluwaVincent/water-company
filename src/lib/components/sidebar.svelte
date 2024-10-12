<script lang="ts">
	import CloseLargeIcon from 'carbon-icons-svelte/lib/CloseLarge.svelte';
	import userTheme, { themes } from '$lib/stores/theme';

	function changeTheme(event: Event) {
		const target = event.target as HTMLSelectElement;
		$userTheme = target.value;
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
			<CloseLargeIcon size={20} />
		</label>

		<ul class="menu mt-8 rounded-box">
			<li class=""><a href="/">Home</a></li>
			<li class=""><a href="/about">About</a></li>
			<li class=""><a href="/services">Our Products</a></li>
			<li class=""><a href="/cart">Cart</a></li>
			<li class=""><a href="/orders">Orders</a></li>

			<li class="mt-4">
				<select name="theme" id="theme" on:change={changeTheme} class="select select-bordered capitalize text-sm" bind:value={$userTheme}>
					{#each themes as theme}
						<option class="bg-secondary-content text-secondary" value={theme} selected={theme === $userTheme}>{theme}</option>
					{/each}
				</select>
			</li>
		</ul>
	</aside>
</div>
