<script lang="ts">
	import { goto } from '$app/navigation';
	import ArrowRightIcon from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import CartItem from '$lib/components/cartItem.svelte';
	import Toast from '$lib/components/toast.svelte';
	import pb from '$lib/config';
	import { cartStore } from '$lib/stores/cart';

	$: total = $cartStore.reduce((acc, item) => item.amount + acc, 0);
	$: listItems = $cartStore.sort((a, b) => a.title.localeCompare(b.title));
	let isLoading = false;
	let message = '';

	function createOrder() {
		isLoading = true;
		if (!pb.authStore.model?.id) return goto('/auth/login');
		pb.collection('orders')
			.create({
				user: pb.authStore.model?.id,
				order: listItems,
				paymentStatus: false,
				outstanding: total,
				amount: total,
				paymentType:"unpaid"
			})
			.then(() => {
				cartStore.set([]);
				message = 'Successful';
			})
			.catch((err) => {
				console.log(err);
				message = 'Failed to create Order';
			})
			.finally(() => {
				isLoading = false;
			});
	}
</script>

<sectio class="p-5 flex flex-col tablet:flex-row">
	{#if message}
		<Toast toast={message} on:clearToast={() => (message = '')} toastType="success" />
	{/if}

	<aside class="flex flex-col gap-8 w-full">
		{#if !$cartStore.length || $cartStore.length <= 0}
			<div class="flex items-center flex-col gap-20 justify-center">
				<p>You have {$cartStore.length} item in your cart</p>
				<a href="/services" class="btn link mx-auto hover:text-secondary-content"
					>Add Items to cart <ArrowRightIcon size={24} /></a
				>
			</div>
		{/if}

		{#each $cartStore as cartItem, i}
			<CartItem {cartItem} />
		{/each}
	</aside>

	<div class="divider lg:divider-horizontal" />

	<aside id="checkout" class="w-full flex-shrink-0 table:max-w-[220px] lg:max-w-[500px]">
		<form on:submit|preventDefault={createOrder} class="prose">
			<h3>Submit Order</h3>
			<div>
				<ul class="menu bg-base-200 rounded-box w-full">
					{#each listItems as cartItem, i}
						<li>{cartItem.title + ': ' + cartItem.brand + ': ' + cartItem.quantity}</li>
					{/each}
				</ul>
				<div class="flex items-center justify-between">
					<p>Total: <b>{total}</b></p>

					<button type="submit" disabled={$cartStore.length<=0} class="btn bg-info text-info-content hover:bg-info-content hover:text-info">
						{#if isLoading}
							<span class="loading loading-spinner"></span>
						{/if}
						Submit Order
					</button>
				</div>
			</div>
		</form>
	</aside>
</sectio>
