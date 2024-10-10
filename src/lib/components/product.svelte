<script lang="ts">
	import AddAlt from 'carbon-icons-svelte/lib/AddAlt.svelte';
	import SubtractAlt from 'carbon-icons-svelte/lib/SubtractAlt.svelte';

	export let product;
	import pb from '$lib/config';

	let quantity: number = 1;
	let selectedBrand: string = '';
	let errMessage = '';

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

	function addToCart(product: any) {
		if (!selectedBrand) return (errMessage = 'Please select a brand');
		console.log('Product Title:', product.title);
		console.log('Selected Brand:', selectedBrand);
		console.log('Quantity:', quantity);
	}
</script>

<section class="px-5 max-w-3xl w-full mx-auto">
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
							id="brands"
							class="select w-full max-w-xs"
							on:change={handleSelectedBrand}
						>
							<option disabled selected>Select Brand</option>
							{#each product.brands as brand}
								<option value={brand}>{brand}</option>
							{/each}
						</select>
					{/if}
				</aside>
				<aside>
					<div class="join join-horizontal border border-base-100">
						<button class="btn join-item" on:click={increment}><AddAlt /></button>
						<button class="btn join-item pointer-events-none">{quantity}</button>
						<button
							class={`btn join-item ${quantity <= 1 && '!btn-ghost'}`}
							disabled={quantity <= 1}
							on:click={decrement}><SubtractAlt /></button
						>
					</div>
				</aside>
			</section>

			<div class="card-actions justify-between mt-4">
				<button class="btn btn-warning" on:click={() => addToCart(product)}>Add to Cart</button>
				<button class="btn btn-success">Pay Now</button>
			</div>
		</div>
	</div>
</section>
