<script>
	import Preloader from '$lib/components/Preloader.svelte'

	import home from '$lib/assets/icons/home.svg'
	import search from '$lib/assets/icons/search.svg'
	import heart from '$lib/assets/icons/heart.svg'
	import profile from '$lib/assets/icons/profile.svg'

	let fileInput
	let loading = false

	function uploadImage(el) {
		loading = true
		const image = el.target.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(image)
		reader.onload = (e) => {
			upload(e.target.result)
		}
	}

	async function upload(imageData) {
		const data = {}
		const imgData = imageData.split(',')
		data['image'] = imgData[1]
		try {
			const response = await fetch('/upload', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					accept: 'application/json'
				},
				body: JSON.stringify(data)
			})
			const canUpload = await response.json()
			loading = false
		} catch (error) {
			console.log(error)
		}
	}
</script>

<nav>
	<ul>
		<li>
			<a href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="44"
					height="44"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#000"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<polyline points="5 12 3 12 12 3 21 12 19 12" />
					<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
					<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
				</svg>
			</a>
		</li>
		<li>
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-search"
					width="44"
					height="44"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#000"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="10" cy="10" r="7" />
					<line x1="21" y1="21" x2="15" y2="15" />
				</svg>
			</a>
		</li>
		<li class="upload">
			<button on:click={() => fileInput.click()}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-plus"
					width="44"
					height="44"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#2c3e50"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<line x1="12" y1="5" x2="12" y2="19" />
					<line x1="5" y1="12" x2="19" y2="12" />
				</svg></button
			>
		</li>
		<li>
			<a href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-heart"
					width="44"
					height="44"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#000"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
					/>
				</svg>
			</a>
		</li>
		<li>
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-user"
					width="44"
					height="44"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#000"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="7" r="4" />
					<path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
				</svg>
			</a>
		</li>
	</ul>
	<form action="/" on:submit|preventDefault={uploadImage} class="hidden">
		<input
			type="file"
			name="image"
			id="image"
			accept=".png, .jpg"
			bind:this={fileInput}
			on:change={uploadImage}
		/>
	</form>
</nav>
{#if loading}
	<Preloader />
{/if}

<style>
	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: var(--background);
		border-top: 2px solid var(--light-gray);
	}

	ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		list-style: none;
		padding: 0.7em 0;
	}

	li {
		width: 2rem;
		height: 2rem;
	}

	button {
		background-color: transparent;
		border: none;
		outline: none;
	}

	svg {
		width: 2rem;
		height: 2rem;
		object-fit: contain;
		stroke: var(--text);
	}
	.hidden {
		display: none;
		visibility: hidden;
	}
</style>
