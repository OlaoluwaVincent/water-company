<script>
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import CustomerService from 'carbon-icons-svelte/lib/CustomerService.svelte';
	import Delivery from 'carbon-icons-svelte/lib/Delivery.svelte';
	import LocationFilled from 'carbon-icons-svelte/lib/LocationFilled.svelte';
</script>

<section>
	<div class="hero min-h-[calc(100svh-68px)]" style="background-image: url(/lightwater.jpg);">
		<div class="hero-overlay bg-opacity-20"></div>
		<div class="hero-content text-neutral-content text-center flex-col gap-8">
			<aside class="prose">
				<h4 class="text-gray-900 text-3xl">Markets & Resource</h4>
				<p
					class="capitalize text-warning-content text-2xl max-w-80 text-center mx-auto font-cursive"
				>
					Each Drop will make you cool n fresh
				</p>
			</aside>

			<button class="btn mx-auto hover:text-secondary">Order Now <ArrowRight size={24} /></button>
		</div>
	</div>
	<!-- Banner -->

	<div class="flex gap-3 justify-evenly py-3 px-5 md:px-10 bg-info min-h-28 text-primary-content">
		<article class="card bg-primary hover:bg-accent">
			<div class="card-body">
				<div class="flex items-center gap-4">
                    <Delivery size={32} /> <span class="text-xl">40</span>
                </div>
				<h3 class="text-lg font-cursive font-bold">Deliveries</h3>
			</div>
		</article>
		<article class="card bg-primary hover:bg-accent">
			<div class="card-body">
				<div class="flex items-center gap-4">
                    <CustomerService size={32} /> <span class="text-xl">40</span>
                </div>
				<h3 class="text-lg font-cursive font-bold">Satisfied Customer</h3>
			</div>
		</article>
		<article class="card bg-primary hover:bg-accent">
			<div class="card-body">
				<div class="flex items-center gap-4">
                    <LocationFilled size={32} /> <span class="text-xl">40</span>
                </div>
				<h3 class="text-lg font-cursive font-bold">Drop Locations</h3>
			</div>
		</article>
	</div>
</section>
