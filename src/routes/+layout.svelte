<script>
	import '../app.css';
	import CloseLarge from 'carbon-icons-svelte/lib/CloseLarge.svelte';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<section class="drawer">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<section class="drawer-content space-y-2">
		<Navbar />
		<slot></slot>
	</section>

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
				<li class="!no-underline"><a href="/">Home</a></li>
				<li class="!no-underline"><a href="/about">About</a></li>
			</ul>
		</aside>
	</div>
</section>
