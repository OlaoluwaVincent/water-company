<script lang="ts">
	import AddAltIcon from 'carbon-icons-svelte/lib/AddAlt.svelte';
	import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
	import SubtractAltIcon from 'carbon-icons-svelte/lib/SubtractAlt.svelte';
	import { decrement, deleteOnFromCart, increment, type CartItems } from '$lib/stores/cart';

	export let cartItem: CartItems;
</script>

<div class="card card-side bg-base-content text-base-100 shadow-xl max-w-xl mx-auto">
	<figure class=" pl-1 md:pl-4 w-[150px] md:w-[200px] h-[150px] md:h-[200px]">
		<img src={cartItem.image} alt="Album" class="rounded-lg h-full w-full object-contain overflow-hidden" />
	</figure>
	<div class="card-body">
		<aside class="badge badge-primary">
			{cartItem.brand}
		</aside>
		<h2 class="card-title text-nowrap">
			{cartItem.title}
			<button on:click={() => deleteOnFromCart(cartItem.randomId)} class="ml-10"
				><TrashCan class="text-red-700 size-6 cursor-pointer" /></button
			>
		</h2>

		<aside>
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
			<p class="text-nowrap">Total: <b>{cartItem.amount}</b></p>
			<p class="text-right text-nowrap">Quantity: <b>{cartItem.quantity}</b></p>
		</div>
	</div>
</div>
