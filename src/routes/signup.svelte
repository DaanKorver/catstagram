<script context="module">
	export async function load({ url }) {
		const error = url.searchParams.get('error')
		return {
			props: {
				error
			}
		}
	}
</script>

<script>
	import profile from '$lib/assets/icons/profile_gray.svg'
	import mail from '$lib/assets/icons/mail_gray.svg'
	import lock from '$lib/assets/icons/lock_gray.svg'

	let username
	let email
	let password
	let repeatPassword
	let validation = null

	export let error

	function register() {
		;[username, email, password, repeatPassword].forEach((value) => {
			if (!value) {
				validation = 'Please fill out all fields.'
				return
			}
		})
		if (validation) return
		if (password !== repeatPassword) {
			validation = 'Passwords are not the same'
			return
		}
		this.submit()
	}
</script>

<h2>Register</h2>
<form action="/auth/signup" method="POST" on:submit|preventDefault={register}>
	<div class="input">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-user"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#ccc"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="12" cy="7" r="4" />
			<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
		</svg>
		<input
			type="text"
			name="username"
			id="username"
			placeholder=" "
			bind:value={username}
			required
		/>
		<label for="username">Username</label>
	</div>
	<div class="input">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="small"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#ccc"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="3" y="5" width="18" height="14" rx="2" />
			<polyline points="3 7 12 13 21 7" />
		</svg>
		<input type="email" name="email" id="email" placeholder=" " bind:value={email} required />
		<label for="email">Email</label>
	</div>
	<div class="input">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="small"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#ccc"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="5" y="11" width="14" height="10" rx="2" />
			<circle cx="12" cy="16" r="1" />
			<path d="M8 11v-4a4 4 0 0 1 8 0v4" />
		</svg>
		<input
			type="password"
			name="password"
			id="password"
			placeholder=" "
			bind:value={password}
			required
		/>
		<label for="password">Password</label>
	</div>
	<div class="input">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="small"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#ccc"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<rect x="5" y="11" width="14" height="10" rx="2" />
			<circle cx="12" cy="16" r="1" />
			<path d="M8 11v-4a4 4 0 0 1 8 0v4" />
		</svg>
		<input
			type="password"
			name="repeatPassword"
			id="repeatPassword"
			placeholder=" "
			bind:value={repeatPassword}
			required
		/>
		<label for="repeatPassword">Repeat password</label>
	</div>
	<button type="submit">Register</button>
	{#if error}
		<p>{error}</p>
	{/if}
	{#if validation}
		<p>{validation}</p>
	{/if}
	<a href="/login">Already have an account?</a>
</form>

<style>
	h2 {
		margin-bottom: 0.5em;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.8em;
	}

	button {
		border: none;
		padding: 1em;
		background: var(--accent);
		border-radius: var(--radius);
		color: #fff;
		font-size: 1rem;
	}
</style>
