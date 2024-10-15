<script lang="ts">
	import pb from '$lib/config';
	import type { OrderItem } from '$lib/types/type';
	import { formatCurrency } from '$lib/utils/formatters';

	export let order: OrderItem;

	let statusColor =
		order.paymentType == 'unpaid'
			? 'error'
			: order.paymentType == 'incomplete'
				? 'warning'
				: 'success';

	let viewMore = false;
</script>

<div class="card card-bordered bg-base-300">
	<div class="card-body p-4">
		<h4 class="flex items-center justify-between">
			<span>{order.expand?.user.name}</span>
			<span class={`badge badge-${statusColor} text-slate-900 badge-lg ml-5`}
				>{order.paymentType}</span
			>
		</h4>

		<div class="flex justify-between items-center gap-2 my-2">
			<span class="badge badge-success badge-lg">Delivered</span>

			<span class="badge badge-warning badge-lg">
				Paid: {formatCurrency(order.amountPaid)}
			</span>
		</div>

		<aside class="flex itemx-center justify-between">
			<button on:click={() => (viewMore = !viewMore)} class="underline underline-offset-2"
				>{viewMore ? 'Hide' : 'View'} Items</button
			>
		</aside>

		{#if viewMore}
			<hr class="h-0.5 bg-blue-900" />
			<ul>
				{#each order.order as item, i}
					<li>
						{item.title} - {item.brand} - {item.quantity}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
