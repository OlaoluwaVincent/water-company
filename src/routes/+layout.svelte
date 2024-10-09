<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
</script>

<section class="drawer">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

	<section class="drawer-content">
		<Navbar />
		<slot></slot>
	</section>

	<Sidebar />
</section>
