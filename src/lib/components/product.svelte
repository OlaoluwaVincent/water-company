<script lang="ts">
	import AddAltIcon from 'carbon-icons-svelte/lib/AddAlt.svelte';
	import SubtractAltIcon from 'carbon-icons-svelte/lib/SubtractAlt.svelte';
	import pb from '$lib/config';
	import { v4 as uuidv4 } from 'uuid';
	import { clearMessage, message, saveToCart } from '$lib/stores/cart';
	import Toast from './toast.svelte';
	import type { ProductRes } from '$lib/types/type';
	import { formatCurrency } from '$lib/utils/formatters';
	import Modal from './modal.svelte';
	import type { UsersResponse } from '$lib/types/pocketbase-types';
	import { goto } from '$app/navigation';

	export let product: ProductRes;

	let quantity: number = 1;
	let selectedBrand: string = '';
	let errMessage = '';
	$: totalCost = product.pricePerPack * quantity;

	function increment() {
		quantity += 1;
	}
	function decrement() {
		if (quantity > 1) {
			quantity -= 1;
		}
	}
	function handleSelectedBrand(e: Event) {
		const target = e.target as HTMLSelectElement;
		selectedBrand = target.value;
	}

	function addToCart(product: ProductRes) {
		if (!selectedBrand) return (errMessage = 'Please select a brand');
		saveToCart({
			randomId: uuidv4(),
			product: product.id,
			amount: totalCost,
			price: product.pricePerPack,
			paymentStatus: false,
			user: pb.authStore.model?.id,
			quantity: quantity,
			brand: selectedBrand,
			image: pb.getFileUrl(product, product.image),
			title: product.title
		});
	}

	$: showModal = false;
	let drivers: UsersResponse<unknown>[];
	let selectedDriver = '';
	let isLoading = false;
	let err_message = '';

	const showModalFn = async () => {
		if (!selectedBrand) return (errMessage = 'Please select a brand');

		const res = await pb.collection('users').getList(1, 20, {
			filter: 'role="driver"',
			fields: 'name,id'
		});
		drivers = res.items;
		showModal = true;
	};

	function handleSelectedUser(e: Event) {
		const target = e.target as HTMLSelectElement;
		selectedDriver = target.value;
	}

	function createOrder() {
		isLoading = true;
		if (!pb.authStore.model?.id) return goto('/auth/login');
		pb.collection('orders')
			.create({
				user: pb.authStore.model?.id,
				order: [
					{
						randomId: uuidv4(),
						product: product.id,
						amount: totalCost,
						price: product.pricePerPack,
						paymentStatus: false,
						user: pb.authStore.model?.id,
						quantity: quantity,
						brand: selectedBrand,
						image: pb.getFileUrl(product, product.image),
						title: product.title
					}
				],
				instant: true,
				paymentStatus: false,
				outstanding: totalCost,
				amount: totalCost,
				paymentType: 'unpaid',
				assigned: selectedDriver
			})
			.then(() => {
				err_message = 'Successful';
			})
			.catch((err) => {
				console.log(err);
				err_message = 'Failed to create Order';
			})
			.finally(() => {
				isLoading = false;
				showModal = false;
			});
	}
</script>

<Modal bind:showModal>
	{#if err_message}
		<p class="text-primary-content">{err_message}</p>
	{/if}
	<div class="flex items-center gap-3">
		<p class="text-primary-content">Pay to:</p>
		{#if drivers}
			<select name="driver" id="driver" class="select select-sm" on:change={handleSelectedUser}>
				<option value={''}>Select Driver</option>
				{#each drivers as item}
					<option value={item.id}>{item.name}</option>
				{/each}
			</select>
		{:else}
			<p>Loading drivers...</p>
		{/if}
	</div>
	{#if err_message !== 'Successful'}
		<button class="btn btn-sm btn-block mt-3" on:click={createOrder}>
			{#if isLoading}
				<span class="loading loading-spinner"></span>
			{/if}
			Pay {formatCurrency(totalCost)}
		</button>
	{/if}
</Modal>

<section class="px-5 max-w-3xl w-full mx-auto">
	{#if $message}
		<Toast toast={$message} on:clearToast={() => clearMessage()} toastType="success" />
	{/if}
	<div class="card md:card-side bg-base-content text-base-100 shadow-xl">
		<figure class="md:px-5 w-full md:max-w-[300px]">
			<img src={pb.getFileUrl(product, product.image)} alt="Album" class="rounded-lg" />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{product.title}</h2>
			<p>Select Brand and Quantity</p>

			<section class="flex gap-4 items-center w-full">
				<aside class="text-base-content w-full">
					{#if errMessage && !selectedBrand}
						<p class="text-red-600">{errMessage}</p>
					{/if}
					{#if product.brands}
						<select
							name="brands"
							id={product.title}
							class="select w-full max-w-xs"
							on:change={handleSelectedBrand}
						>
							<option disabled selected>Select Brand</option>
							{#each product.brands as brand, i}
								<option value={brand}>{brand}</option>
							{/each}
						</select>
					{/if}
				</aside>
				<aside>
					<div class="join join-horizontal border border-base-100">
						<button
							class={`btn join-item ${quantity >= product.quantity && '!btn-ghost'}`}
							disabled={quantity >= product.quantity}
							on:click={increment}><AddAltIcon /></button
						>
						<button class="btn join-item pointer-events-none">{quantity}</button>
						<button
							class={`btn join-item ${quantity <= 1 && '!btn-ghost'}`}
							disabled={quantity <= 1}
							on:click={decrement}><SubtractAltIcon /></button
						>
					</div>
				</aside>
			</section>
			<div class="flex justify-between gap-4 items-center">
				<p>Total Cost: {formatCurrency(totalCost)}</p>
				<p class="text-right">Available Quantity: {product.quantity}</p>
			</div>

			<div class="card-actions justify-between mt-4">
				<button class="btn btn-warning" on:click={() => addToCart(product)}>Add to Cart</button>
				<button class="btn btn-success" on:click={showModalFn}>Pay Now</button>
			</div>
		</div>
	</div>
</section>
