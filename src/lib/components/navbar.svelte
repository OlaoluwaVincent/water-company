<script lang="ts">
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
</script>

<nav class="navbar bg-base-100 drop-shadow-md">
	<label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button">
		<Menu size={32} />
	</label>

	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">EverFlow</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/about" class="link hidden md:block">About</a></li>
			<li>
				<a href="/documentation" class="link hidden md:block" rel="noopener noreferrer">
					Documentation
				</a>
			</li>
		</ul>
	</div>
</nav>
