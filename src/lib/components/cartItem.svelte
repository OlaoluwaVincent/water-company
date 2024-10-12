<script lang="ts">
	import AddAltIcon from 'carbon-icons-svelte/lib/AddAlt.svelte';
	import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
	import SubtractAltIcon from 'carbon-icons-svelte/lib/SubtractAlt.svelte';
	import { decrement, deleteOnFromCart, increment, type CartItems } from '$lib/stores/cart';
	import { formatCurrency } from '$lib/utils/formatters';

	export let cartItem: CartItems;
</script>

<div class="card card-side bg-base-content text-base-100 shadow-xl mx-auto w-full">
	<figure class=" pl-1 md:pl-4 w-[120px] md:w-[200px] md:h-[200px] overflow-hidden">
		<img src={cartItem.image} alt="Album" class="rounded-lg h-full w-full object-contain" />
	</figure>
	<div class="card-body p-4 md:p-8 ">
		<aside class="badge badge-primary">
			{cartItem.brand}
		</aside>
		<h2 class="card-title text-nowrap">
			{cartItem.title}
			<button on:click={() => deleteOnFromCart(cartItem.randomId)} class="pl-2"
				><TrashCan class="text-red-700 size-6 cursor-pointer" /></button
			>
		</h2>

		<aside class="">
			<div class="join join-horizontal border border-base-100">
				<button class={`btn btn-sm join-item `} on:click={() => increment(cartItem.randomId)}
					><AddAltIcon /></button
				>
				<button class="btn btn-sm join-item pointer-events-none">{cartItem.quantity}</button>
				<button
					class={`btn btn-sm join-item ${cartItem.quantity <= 1 && '!btn-ghost'}`}
					disabled={cartItem.quantity <= 1}
					on:click={() => decrement(cartItem.randomId)}><SubtractAltIcon /></button
				>
			</div>
		</aside>
		<div class="flex justify-between gap-4 items-center">
			<p class="text-nowrap">Qty: <b>{cartItem.quantity}</b></p>
			<p class="text-nowrap text-right">Total: <b>{formatCurrency(cartItem.amount)}</b></p>
		</div>
	</div>
</div>
