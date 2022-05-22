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
	let email
	let password

	export let error
</script>

<h2>Login</h2>
<form action="/auth/login" method="POST">
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
		<label for="username">Repeat password</label>
	</div>
	<button type="submit">Login</button>
</form>
{#if error}
	<p>{error}</p>
{/if}
<a href="/signup">Don't have an account?</a>

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
