<script lang="ts">
	import pb from '$lib/config';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import ShoppingCart from 'carbon-icons-svelte/lib/ShoppingCart.svelte';
	import userStore from '$lib/stores/user';

	function handleLogout() {
		pb.authStore.clear();
	}
</script>

<nav class="navbar bg-base-100 drop-shadow-md">
	<label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button">
		<Menu size={32} />
	</label>

	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">EverFlow</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1 items-center">
			{#if !$userStore?.isValid}
				<li>
					<a href="/auth/register" class="link no-underline btn btn-accent btn-sm">Register</a>
				</li>
				<li>
					<a
						href="/auth/login"
						class="link no-underline btn btn-success ml-3 btn-sm hidden md:inline-flex">Login</a
					>
				</li>
			{:else}
				<button on:click={handleLogout} class="link no-underline btn btn-accent btn-sm">Logout</button>
			{/if}
			<li class="ml-3">
				<a href="/cart" class=""><ShoppingCart size={24} /></a>
			</li>
			<li><a href="/about" class="link hidden md:block ml-5">About</a></li>
			<li>
				<a href="/documentation" class="link hidden md:block" rel="noopener noreferrer">
					Documentation
				</a>
			</li>
		</ul>
	</div>
</nav>
