<script>
	import cat from '$lib/assets/cat02.jpg'
	import profile from '$lib/assets/cat04.jpg'
	import heart from '$lib/assets/icons/heart.svg'
</script>

<section>
	<div class="user">
		<img src={profile} alt="profile" />
		<div>
			<h2>Daan</h2>
			<p>June 3rd</p>
		</div>
	</div>
	<img src={cat} alt="cat" />
	<div class="meta">
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
			<path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
		</svg>
		<p>69 Likes</p>
	</div>
</section>

<style>
	section {
		margin-bottom: 1.5em;
	}

	.user {
		display: flex;
		font-size: 0.8rem;
		align-items: center;
		padding: 0.5em 0;
		gap: 0.5em;
	}

	.user img {
		width: 3em;
		height: 3em;
		border-radius: 50%;
		border: 2px solid var(--accent);
	}

	.user h2,
	.user p {
		font-size: 0.8rem;
	}

	.user p {
		color: var(--text-light);
	}

	section > img {
		width: 100%;
		height: 45vh;
		object-fit: cover;
		border-radius: var(--radius);
		max-height: 90vw;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.meta svg {
		width: 1.5em;
		height: 1.5em;
		stroke: var(--text);
	}
</style>
