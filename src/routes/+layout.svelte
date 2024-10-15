<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';

	import pb from '$lib/config';
	import userStore from '$lib/stores/user';
	import userTheme from '$lib/stores/theme';
	import { closeModal, Modals } from 'svelte-modals';

	// Define protected routes
	const protectedRoutes = ['/orders', '/driver'];

	// Check if a route is protected
	function isRouteProtected(route: string) {
		return protectedRoutes.includes(route);
	}

	$: $page,
		(() => {
			if ($page.url.pathname.startsWith('/auth') && $userStore?.isValid && browser) {
				goto('/');
			}
			if (
				!$page.url.pathname.startsWith('/auth') &&
				!pb.authStore.isValid &&
				browser &&
				isRouteProtected($page.url.pathname)
			) {
				goto('/auth/login?prev=' + $page.url.pathname);
			}

			if (pb.authStore.model?.role === 'driver') {
				return goto('/driver');
			}
		})();

	let isReady = false;
	onMount(() => {
		if (typeof document !== 'undefined') {
			document.body.setAttribute('data-theme', $userTheme);
		}
		isReady = true;
	});

	$: if (typeof document !== 'undefined') {
		document.body.setAttribute('data-theme', $userTheme);
	}
</script>

<div>
	{#if isReady}
		<section class="drawer">
			<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
			<section class="drawer-content">
				<Navbar />
				<slot></slot>
			</section>

			<Sidebar />
		</section>

		<Modals>
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div slot="backdrop" class="backdrop" on:click={closeModal} />
		</Modals>
	{/if}

	{#if !isReady}
		<section class="h-screen w-full bg-gray-900 flex items-center justify-center">
			<span class="loading loading-ring loading-lg"></span>
		</section>
	{/if}
</div>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
