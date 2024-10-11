<script lang="ts">
	import Product from '$lib/components/product.svelte';
	import pb from '$lib/config';

	import { onMount } from 'svelte';

	let products: any = [];
	let isLoading: boolean = true;

	// Fetch collection onMount||Render
	onMount(() => {
		pb.collection('products')
			.getList()
			.then((res) => {
				products = res.items;
				isLoading = false;
			})
			.catch((err) => {
				console.error('Error loading products', err);
				isLoading = false;
			});
	});
</script> 

<div class="py-10">
	{#if isLoading}
		<p class="animate-pulse">Loading...</p>
	{:else if !products || products.length === 0}
		<p>No products available</p>
	{:else}
		<div class="flex gap-4 flex-col">
			{#each products as product (product.id)}
				<Product {product} />
			{/each}
		</div>
	{/if}
</div>
