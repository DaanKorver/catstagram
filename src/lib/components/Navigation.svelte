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
					stroke="#2c3e50"
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
		<li><a href="/"><img src={search} alt="" /></a></li>
		<li class="upload"><button on:click={() => fileInput.click()}>&plus;</button></li>
		<li><a href="/"><img src={heart} alt="" /></a></li>
		<li><a href="/"><img src={profile} alt="" /></a></li>
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
	}

	img {
		width: 2em;
		height: 2em;
	}

	.upload {
		transform: translateY(-50%);
	}

	button {
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		border: none;
		position: relative;
		background: var(--accent);
		color: #fff;
		font-size: 2rem;
	}

	button::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		width: 100%;
		height: 100%;
		z-index: -1;
		border: 0.5rem solid var(--background);
	}

	button::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		border-radius: 50%;
		width: calc(100% + 1rem);
		height: calc(100% + 1rem);
		z-index: -1;
		border: 2px solid transparent;
		border-bottom-color: var(--light-gray);
		border-left-color: var(--light-gray);
	}

	.hidden {
		display: none;
		visibility: hidden;
	}
</style>
