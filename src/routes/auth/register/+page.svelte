<div class="hero bg-base-200 min-h-screen">
	<div class="hero-content flex-col lg:flex-row-reverse lg:gap-20">
		<div class="text-center lg:text-left max-w-sm">
			<h1 class="text-5xl font-bold">Register now!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
		<div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
			<form class="card-body">
				<div class="form-control">
					<label class="label" for="name">
						<span class="label-text">Full Name</span>
					</label>
					<input
						id="name"
						type="text"
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
						placeholder="confirm password"
						class="input input-bordered"
						required
					/>
				</div>
                <label class="label" for="forgot">
                    <a href="/auth/login" class="label-text-alt link link-hover"
                        >Already have an account? <span class="text-blue-500">Login</span></a
                    >
                </label>
				<div class="form-control mt-6">
					<button class="btn btn-primary">Register</button>
				</div>
			</form>
		</div>
	</div>
</div>
