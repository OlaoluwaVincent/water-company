<script lang="ts">
	import type { OrderRes } from '$lib/types/type';
	import { formatCurrency, formatDate } from '$lib/utils/formatters';

	export let order: OrderRes;

	let viewMore = false;
</script>

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
		<p>{order.order.length} item{order.order.length > 1 ? 's' : ''} ordered</p>
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
