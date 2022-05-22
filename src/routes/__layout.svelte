<script>
	import { session } from '$app/stores'

	import Header from '$lib/components/Header.svelte'
	import Navigation from '$lib/components/Navigation.svelte'
</script>

<Header />
<main class={$session.loggedIn ? 'nav' : ''}>
	<slot />
</main>
{#if $session.loggedIn}
	<Navigation />
{/if}

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Mukta&family=PT+Sans:wght@700&display=swap"
		rel="stylesheet"
	/>
	<style>
		:root {
			--text: #1a1a1a;
			--text-light: #aaa;
			--light-gray: #ccc;
			--background: #fafafa;
			--accent: #f8bd96;
			--radius: 0.625rem;
		}

		body {
			background-color: var(--background);
			color: var(--text);
			font-family: 'Mukta', sans-serif;
		}

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: 'PT Sans', sans-serif;
		}

		main {
			padding: 0 1em;
			padding-top: 4.5em;
		}

		main.nav {
			padding-bottom: 5em;
		}

		/* Input */
		.input {
			display: flex;
			align-items: center;
			overflow: hidden;
			border-bottom: 1px solid var(--light-gray);
			position: relative;
			padding-top: 0.5em;
			gap: 0.3rem;
			font-size: 1rem;
		}

		.input svg {
			width: 1.3em;
			height: 1.3em;
			object-fit: contain;
		}

		.input svg.small {
			height: 1.2em;
		}

		.input label {
			position: absolute;
			left: 1.8rem;
			color: var(--light-gray);
			font-weight: bold;
			text-transform: uppercase;
			font-size: 0.8rem;
			transition: 200ms;
			top: 60%;
			transform: translateY(-50%);
			letter-spacing: 0.2em;
		}

		input {
			border: none;
			font-size: 0.9rem;
			flex-grow: 1;
			background-color: transparent;
			padding: 0.5em 0;
			color: var(--text);
		}

		input:focus {
			outline: none;
		}

		input:focus ~ label,
		input:not(:placeholder-shown) ~ label {
			font-size: 0.6rem;
			top: 0;
			transform: translateY(0%);
		}
		/* Dark mode */
		@media (prefers-color-scheme: dark) {
			:root {
				--text: #fafafa;
				--background: #1a1a1a;
			}
		}
	</style>
</svelte:head>
