<script lang="ts">
	import pb from '$lib/config';
	import ArrowRightIcon from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import type { OrderRes } from '$lib/types/type';
	import { formatDate, formatCurrency } from '$lib/utils/formatters';

	let orders: OrderRes[] = [];
	let loading = true;
	let viewMore = false;

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
			<div class="card bg-secondary text-secondary-content p-3 space-y-2">
				<div class="flex justify-between">
					<p class="text-sm">{formatDate(order.created)}</p>
					<p
						class={`badge text-secondary-content ${order.paymentType == 'unpaid' ? 'badge-error' : 'badge-success'}`}
					>
						{order.paymentType == 'unpaid' ? 'On-route' : 'Delivered'}
					</p>
					<p
						class={`uppercase text-primary-content badge badge-${order.paymentType == 'unpaid' ? 'error' : order.paymentType == 'partial' ? 'warning' : 'success'}`}
					>
						{order.paymentType}
					</p>
				</div>
				<div class="flex items-center justify-between">
					<p>{order.order.length} item{order.order.length > 1 && 's'} ordered</p>
					<button on:click={() => (viewMore = !viewMore)} class="underline"
						>{viewMore ? 'Hide' : 'View'} Items</button
					>
				</div>
				{#if viewMore}
					<ul>
						{#each order.order as item, i}
							<li>
								{item.title} - {item.brand} - {item.quantity} -
								<b>{formatCurrency(item.amount)}</b>
							</li>
						{/each}
						<span class="divider divider-primary"></span>
					</ul>
				{/if}

				<p>Balance: <b>{formatCurrency(order.outstanding)}</b></p>
				<p>Total: <b>{formatCurrency(order.amount)}</b></p>
			</div>
		{/each}
	</div>
{/if}
