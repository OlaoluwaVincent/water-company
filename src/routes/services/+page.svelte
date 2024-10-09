<script lang="ts">
	import AddAlt from 'carbon-icons-svelte/lib/AddAlt.svelte';
	import SubtractAlt from 'carbon-icons-svelte/lib/SubtractAlt.svelte';

	let quantity: number = 0;

	function increment() {
		quantity += 1;
	}
	function decrement() {
		quantity -= 1;
	}
</script>

<section class="px-5">
    <div class="card md:card-side bg-base-content text-base-100 shadow-xl">
        <figure>
            <img
                src="/bag of water.jpg"
                alt="Album"
                class=" md:w-[300px]"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Bag of Sachet Water</h2>
            <p>Select Brand and Quantity</p>

            <section class="flex gap-4 items-center w-full">
                <aside class="text-base-content">
                    <select class="select w-full max-w-xs">
                        <option disabled selected>Select Brand</option>
                        <option>Auto</option>
                        <option>Dark mode</option>
                        <option>Light mode</option>
                    </select>
                </aside>
                <aside>
                    <div class="join join-horizontal border border-base-100">
                        <button class="btn join-item" on:click={increment}><AddAlt /></button>
                        <button class="btn join-item pointer-events-none">{quantity}</button>
                        <button class={`btn join-item ${quantity<=1 && '!btn-ghost'}`} disabled={quantity <= 1} on:click={decrement}
                            ><SubtractAlt /></button
                        >
                    </div>
                </aside>
            </section>

            <div class="card-actions justify-between mt-4">
                <button class="btn btn-warning">Add to Cart</button>
                <button class="btn btn-success">Pay Now</button>
            </div>
        </div>
    </div>
    
</section>