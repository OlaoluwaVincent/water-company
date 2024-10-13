<script lang="ts">
	import pb from '$lib/config';
	import ArrowRightIcon from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import type { OrderRes } from '$lib/types/type';
	import { formatDate, formatCurrency } from '$lib/utils/formatters';
	import OrderItem from '$lib/components/orderItem.svelte';

	let orders: OrderRes[] = [];
	let loading = true;


	pb.collection('orders')
		.getList()
		.then((res) => {
			orders = res.items as OrderRes[];
			loading = false;
		})
		.finally(() => {
			loading = false;
		});
</script>

{#if loading}
	<div class="h-screen flex items-center justify-center">
		<div class="loading loading-spinner text-info loading-lg"></div>
	</div>
{/if}

{#if orders.length <= 0}
	<div class="h-[90vh] flex items-center flex-col gap-20 justify-center">
		<p>You have not made any order yet</p>
		<a href="/services" class="btn link mx-auto hover:text-secondary"
			>Order Now <ArrowRightIcon size={24} /></a
		>
	</div>
{/if}

{#if orders.length}
	<div class="max-w-xl w-[90%] mx-auto space-y-4 my-8">
		{#each orders as order, i}
			<OrderItem {order}/>
		{/each}
	</div>
{/if}
