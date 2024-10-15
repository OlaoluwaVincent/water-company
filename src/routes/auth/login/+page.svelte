<script lang="ts">
	import pb from '$lib/config';

	let email = '';
	let password = '';
	let loading = false;
	let err_message = '';

	async function login() {
		loading = true;
		pb.collection('users')
			.authWithPassword(email, password)
			.catch((err: any) => {
				err_message = err.message;
				console.log(err);
			})
			.finally(() => {
				loading = false;
			});
	}
</script>

<div class="hero bg-base-200 min-h-screen">
	<div class="hero-content flex-col lg:flex-row-reverse lg:gap-20">
		<div class="text-center lg:text-left max-w-sm">
			<h1 class="text-5xl font-bold">Login now!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
		<div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
			<form class="card-body" on:submit|preventDefault={login}>
				<div class="form-control">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						placeholder="email"
						class="input input-bordered"
						required
					/>
				</div>
				<div class="form-control">
					<label class="label" for="password">
						<span class="label-text">Password</span>
					</label>
					<input
						id="password"
						type="password"
						bind:value={password}
						placeholder="password"
						class="input input-bordered"
						required
					/>
					<label class="label" for="forgot">
						<a href="/auth" class="label-text-alt link link-hover">Forgot password?</a>
					</label>
				</div>
				<a href="/auth/register" class="label-text-alt link link-hover"
					>Don't have an account? <span class="text-blue-500">Register</span></a
				>
				<div class="form-control mt-6">
					{#if err_message}
						<p class="text-error">{err_message}</p>
					{/if}
					<button type="submit" class="btn bg-primary">
						{#if loading}
							<span class="loading loading-spinner"></span>
						{/if}
						Login
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
