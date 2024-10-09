<script>
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';
	import CustomerService from 'carbon-icons-svelte/lib/CustomerService.svelte';
	import Delivery from 'carbon-icons-svelte/lib/Delivery.svelte';
	import Location from 'carbon-icons-svelte/lib/Location.svelte';
</script>

<section>
	<div
		class="hero h-[calc(100vh-64px)] md:h-[calc(100vh-68px)] bg-base-content"
		style="background-image: url(/lightwater.jpg);"
	>
		<!-- Hero -->
		<!-- <div class="hero-overlay bg-opacity-20"></div> -->
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
	<div
		class="flex gap-3 justify-evenly py-8 px-5 md:px-10 min-h-28 text-primary-content text-center"
	>
		<article class="card bg-primary hover:bg-accent">
			<div class="card-body p-3 md:p-8">
				<div class="flex items-center gap-4">
					<Delivery class="size-5 lg:size-8" /> <span class="text-xl">40</span>
				</div>
				<h3 class="text-sm md:text-base lg:text-lg font-cursive font-bold">Deliveries</h3>
			</div>
		</article>
		<article class="card bg-primary hover:bg-accent">
			<div class="card-body p-3 md:p-8">
				<div class="flex items-center gap-4">
					<CustomerService class="size-5 lg:size-8" /> <span class="text-xl">40</span>
				</div>
				<h3 class="text-sm md:text-base lg:text-lg font-cursive font-bold">Satisfied Customer</h3>
			</div>
		</article>
		<article class="card bg-primary hover:bg-accent">
			<div class="card-body p-3 md:p-8">
				<div class="flex items-center gap-4">
					<Location class="size-5 lg:size-8" /> <span class="text-xl">40</span>
				</div>
				<h3 class="text-sm md:text-base lg:text-lg font-cursive font-bold">Drop Locations</h3>
			</div>
		</article>
	</div>

	<!-- Marketing Caption -->
	<div
		class="hero h-[calc(100svh-68px)] bg-warning hero-background"
		style="background-image: url(/splash.png);"
	>
		<article class="prose flex items-center flex-col">
			<h3 class="lg:text-2xl font-bold underline text-gray-900 btn-disabled my-20">
				Why Choose Us
			</h3>
			<p class="text-lg lg:text-3xl text-center space-y-3">
				<span class="text-gray-900 font-bold">We are you,</span>
				<span class="text-gray-900 block font-bold font-cursive glass px-3 rounded-md"
					>We are in your neighborhood</span
				>
				<span class="block text-gray-900 font-bold">We belong to you</span>
			</p>
			<button class="btn btn-success text-success-content">Register with us</button>
		</article>
	</div>

	<!-- Services -->
	<div
		class="hero h-[80vh] bg-base px-5"
	>
		<div class="flex w-full flex-col md:flex-row itemx-center">
			<div class="card bg-base-300 rounded-box grid flex-grow place-items-center w-full">
                <ul class="menu">
                    <h3 class="prose mb-4 font-bold">Our Services</h3>
                    <li>Sachet Water</li>
                    <li>Bottle Water</li>
                    <li>Large Bottle Watter</li>
                  </ul>
            </div>
			<div class="divider lg:divider-horizontal"/>
			<div class="card grid flex-grow place-items-center w-full">
                <img src="/offers.png" alt="Our Services" class="bg-contain w-[300px]">
            </div>
		</div>
	</div>


</section>

<style>
	.hero-background {
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		opacity: 0.8;
		/* filter: contrast(1.2) brightness(1.1); */
	}
</style>
