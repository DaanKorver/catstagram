<script context="module">
	export async function load({ session }) {
		if (!session.loggedIn) {
			return {
				status: 302,
				redirect: '/login'
			}
		}
		return {}
	}
</script>

<script>
	import cat from '$lib/assets/cat01.jpg'
	import cat2 from '$lib/assets/cat02.jpg'
	import cat3 from '$lib/assets/cat03.jpg'
</script>

<header>
	<img src={cat} alt="Profile" />
</header>
<section class="profile">
	<h2>Daan</h2>
	<p>420 likes</p>
</section>
<section class="posts">
	<img src={cat} alt="" />
	<img src={cat2} alt="" />
	<img src={cat} alt="" />
	<img src={cat} alt="" />
	<img src={cat} alt="" />
	<img src={cat3} alt="" />
	<img src={cat} alt="" />
	<img src={cat} alt="" />
	<img src={cat} alt="" />
	<img src={cat} alt="" />
</section>

<style>
	header {
		height: 20vh;
		background-color: var(--accent);
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin-bottom: 3em;
	}

	header > img {
		width: 30vw;
		height: 30vw;
		min-width: 100px;
		min-height: 100px;
		max-width: 150px;
		max-height: 150px;
		object-fit: cover;
		border-radius: 50%;
		transform: translateY(40%);
	}

	.profile {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 1em;
	}

	h2 {
		position: relative;
	}

	h2::before {
		content: '@';
		position: absolute;
		transform: translateX(-100%) translateY(-50%);
		top: 50%;
		font-size: 1rem;
	}

	.posts {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
	}

	.posts > img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}
</style>
