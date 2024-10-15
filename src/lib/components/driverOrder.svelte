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
	let acceptPayment = false;
	let amount = 0;
	let loading = false;

	function submitPayment() {
		loading = true;
		pb.collection('orders')
			.update(order.id, {
				outstanding: order.amount - (amount + order.amountPaid),
				amountPaid: amount + order.amountPaid,
				paymentStatus: order.amountPaid === order.amount,
				deliveryStatus: true,
				paymentType:
					amount == order.outstanding
						? 'paid'
						: amount < order.outstanding
							? 'incomplete'
							: 'unpaid'
			})
			.then(() => {
				window.location.reload();
				// invalidate('/driver');
			})
			.finally(() => {
				loading = false;
			});
	}
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
			{#if order.paymentType !== 'paid'}
				<span class="badge badge-warning badge-lg">
					Bal.: {formatCurrency(order.outstanding)}
				</span>
			{/if}
			<span class="badge badge-warning badge-lg">
				Paid: {formatCurrency(order.amountPaid)}
			</span>
		</div>

		<aside class="flex itemx-center justify-between">
			<button on:click={() => (viewMore = !viewMore)} class="underline underline-offset-2"
				>{viewMore ? 'Hide' : 'View'} Items</button
			>
			{#if order.paymentType !== 'paid'}
				<button
					on:click={() => (acceptPayment = !acceptPayment)}
					class="underline underline-offset-2">Accept Payment</button
				>
			{/if}
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

		{#if acceptPayment && order.paymentType !== 'paid'}
			<label class="input input-bordered flex items-center gap-2 mt-2">
				<input
					type="number"
					bind:value={amount}
					class="grow"
					placeholder="Enter Total amount received"
				/>
				<button
					type="button"
					on:click={submitPayment}
					disabled={amount <= 0}
					class="badge badge-info"
				>
					{#if loading}
						<span class="loading loading-spinner"></span>
					{:else}
						GO
					{/if}
				</button>
			</label>
		{/if}
	</div>
</div>
