<script lang="ts">
	import CartItem from '$lib/components/cartItem.svelte';
	import { cartStore } from '$lib/stores/cart';

</script>

<div class="p-5 flex flex-col gap-8">
	{#each $cartStore as cartItem, i}
		<CartItem {cartItem} />
	{/each}
</div>
