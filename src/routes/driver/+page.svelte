<script lang="ts">
	import DeliveredOrder from '$lib/components/deliveredOrder.svelte';
	import DriverOrder from '$lib/components/driverOrder.svelte';
	import type { OrderItem } from '$lib/types/type';

	interface OrderType {
		orders: {
			pendingOrder: OrderItem[];
			deliveredOrder: OrderItem[];
		};
	}

	export let data: OrderType;
</script>

<section class="py-8 w-full px-5 flex items-center mx-auto justify-center max-w-xl">
	<div role="tablist" class="tabs tabs-lifted w-full">
		<input
			type="radio"
			name="my_tabs_2"
			role="tab"
			class="tab"
			aria-label="Assigned"
			checked={true}
		/>
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-3 space-y-5">
			{#if data.orders.pendingOrder && data.orders.pendingOrder.length}
				{#each data.orders.pendingOrder as order, i}
					<DriverOrder {order} />
				{/each}
			{:else}
				<p>You have not been assigned any order, contact management</p>
			{/if}
		</div>

		<input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Delivered" />
		<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-3 space-y-5">
			{#if data.orders.deliveredOrder && data.orders.deliveredOrder.length}
				{#each data.orders.deliveredOrder as order, i}
					<DeliveredOrder {order} />
				{/each}
			{:else}
				<p>You have not made any delivery yet</p>
			{/if}
		</div>
	</div>
</section>
