<script lang="ts">
	import { goto } from '$app/navigation';
	import pb from '$lib/config';
	let email: string = '';
	let password: string = '';
	let fullname: string = '';
	let confirmPass: string = '';
	let errMessage = '';
	let isLoading = false;

	function handleSubmit() {
		isLoading = true;
		if (password.length < 8) {
			errMessage = 'Password should be atleast 7 characters.';
			isLoading = false;
		}
		if (password !== confirmPass) {
			errMessage = 'Passwords do not match';
			isLoading = false;
		}

		pb.collection('users')
			.create({
				email: email.toLowerCase(),
				password,
				passwordConfirm: confirmPass,
				name: fullname,
				role: 'customer'
			})
			.then(() => goto('/auth/login?email=' + email.toLowerCase))
			.catch((err) => {
				errMessage = err.data.data.email.message || err.data.data.name.message || err.data.message;
			})
			.finally(() => (isLoading = false));
	}
</script>

<div class="hero bg-base-200 min-h-[calc(100vh-68px)">
	<div class="hero-content flex-col lg:flex-row-reverse lg:gap-20">
		<div class="text-center lg:text-left max-w-sm">
			<h1 class="text-5xl font-bold">Register now!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
		<div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
			<form on:submit={handleSubmit} class="card-body">
				<div class="form-control">
					<label class="label" for="name">
						<span class="label-text">Full Name</span>
					</label>
					<input
						id="name"
						type="text"
						bind:value={fullname}
						placeholder="Full Name"
						class="input input-bordered"
						required
					/>
				</div>
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
				</div>
				<div class="form-control">
					<label class="label" for="cpassword">
						<span class="label-text">Confirm Password</span>
					</label>
					<input
						id="cpassword"
						type="password"
						bind:value={confirmPass}
						placeholder="confirm password"
						class="input input-bordered"
						required
					/>
				</div>
				{#if errMessage.length}
					<p class="text-red-600">{errMessage}</p>
				{/if}
				<label class="label" for="forgot">
					<a href="/auth/login" class="label-text-alt link link-hover"
						>Already have an account? <span class="text-blue-500">Login</span></a
					>
				</label>
				<div class="form-control mt-6">
					<button type="submit" disabled={isLoading} class="btn btn-primary">
						{#if isLoading}
							<span class="loading loading-spinner"></span>
						{/if}
						Register
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
