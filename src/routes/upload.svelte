<script context="module">
	import { image } from '../store'
	import { get } from 'svelte/store'

	import Preloader from '$lib/components/Preloader.svelte'

	export async function load({}) {
		const file = get(image)
		if (!file) {
			return {
				status: 302,
				redirect: '/'
			}
		} else {
			return {
				props: { uploadImage: get(image) }
			}
		}
	}
</script>

<script>
	export let uploadImage

	import { browser } from '$app/env'

	let imgSrc = null
	let caption = ''
	let uploading = false
	const MAX_CAPTION_LENGTH = 69

	$: if (caption.length > MAX_CAPTION_LENGTH) caption = caption.slice(0, -1)

	if (browser) {
		const reader = new FileReader()
		reader.readAsDataURL(uploadImage)
		reader.onload = (e) => {
			imgSrc = e.target.result
		}
	}

	async function upload() {
		uploading = true
		window.onbeforeunload = () => {
			return 'Data will be lost if you leave the page, are you sure?'
		}
		const image = imgSrc.split(',')[1]
		try {
			const response = await fetch('/upload', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					accept: 'application/json'
				},
				body: JSON.stringify({ image, caption })
			})
			const canUpload = await response.json()
			uploading = false
			console.log(canUpload)
			window.onbeforeunload = null
			//TODO: handle loading screen.
		} catch (error) {
			console.log(error)
		}
	}
</script>

{#if uploading}
	<Preloader />
{/if}
<span>
	<a href="/"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-arrow-left"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#FFFFFF"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<line x1="5" y1="12" x2="19" y2="12" />
			<line x1="5" y1="12" x2="11" y2="18" />
			<line x1="5" y1="12" x2="11" y2="6" />
		</svg></a
	>
	<h2>Upload image</h2>
</span>
<p>Make sure its a cat...</p>

<div class="preview">
	<p>Preview</p>
	{#if imgSrc}
		<img src={imgSrc} alt="preview" />
	{/if}
</div>
<form action="" method="POST" on:submit|preventDefault={upload}>
	<div class="input">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-blockquote"
			width="44"
			height="44"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="#fff"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 15h15" />
			<path d="M21 19h-15" />
			<path d="M15 11h6" />
			<path d="M21 7h-6" />
			<path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
			<path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
		</svg>
		<input type="text" name="caption" id="caption" placeholder=" " bind:value={caption} required />
		<label for="caption">Caption</label>
	</div>
	<p>{caption?.length || 0} / {MAX_CAPTION_LENGTH}</p>
	<button type="submit">Upload</button>
</form>

<style>
	.preview {
		width: 100%;
		height: 35vh;
		min-height: 280px;
		max-height: 350px;
		overflow: hidden;
		border-radius: var(--radius);
		background-color: #ededed;
		background: linear-gradient(
				100deg,
				rgba(255, 255, 255, 0) 40%,
				rgba(255, 255, 255, 0.5) 50%,
				rgba(255, 255, 255, 0) 60%
			)
			#ededed;
		background-size: 200% 100%;
		background-position-x: 180%;
		animation: 0.5s loading ease-in-out infinite;
		position: relative;
		margin-bottom: 1em;
	}

	.preview p {
		color: #aaa;
		font-weight: bold;
		font-size: 1.5rem;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.preview img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: relative;
		z-index: 2;
	}

	form {
		display: flex;
		gap: 1em;
		flex-direction: column;
	}

	button {
		border: none;
		padding: 1em;
		background: var(--accent);
		border-radius: var(--radius);
		color: #fff;
		font-size: 1rem;
	}

	@keyframes loading {
		to {
			background-position-x: -20%;
		}
	}

	span {
		display: flex;
		align-items: center;
		gap: 0.5em;
		margin-bottom: 1em;
	}

	span a {
		width: 1.5em;
		height: 1.5em;
	}

	span svg {
		width: 100%;
		height: 100%;
	}
</style>
