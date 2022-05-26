<script>
	import cat from '$lib/assets/icons/cat.svg'
</script>

<div>
	<svg
		width="752pt"
		height="752pt"
		version="1.1"
		viewBox="0 0 752 752"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g
			fill="none"
			stroke="var(--text)"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="3"
		>
			<path
				transform="matrix(4.7358 0 0 4.7358 139.21 139.21)"
				d="m76.37 41.19v-20.189l-12.65 7.3097c-8.5585-4.2842-18.627-4.3254-27.22-0.1097l-12.5-7.2v19.35c-1.813 3.5377-2.7591 7.4548-2.7599 11.43 0.039592 14.76 12.9 26.72 28.759 26.72 15.86 0 28.72-12 28.72-26.72l8.25e-4 -8.25e-4c8.25e-4 -3.659-0.80174-7.2742-2.3508-10.59z"
			/>
			<path transform="matrix(4.7358 0 0 4.7358 139.21 139.21)" d="m35.48 48.3h5.8101" />
			<path transform="matrix(4.7358 0 0 4.7358 139.21 139.21)" d="m56.39 48.3h5.8101" />
			<path transform="matrix(4.7358 0 0 4.7358 139.21 139.21)" d="m44.77 56.43h8.1296" />
			<path transform="matrix(4.7358 0 0 4.7358 139.21 139.21)" d="m48.84 56.43v4.0598" />
		</g>
	</svg>

	<p>Loading</p>
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: var(--background);
		z-index: 50;
	}

	svg {
		width: 60%;
		height: auto;
		animation: blink 1s ease-in-out infinite alternate;
	}

	p {
		font-size: 1.2rem;
	}

	p::after {
		content: '';
		animation: dots 2s ease-in-out infinite alternate;
	}

	@keyframes blink {
		from {
			opacity: 1;
		}

		to {
			opacity: 0.3;
		}
	}

	@keyframes dots {
		25% {
			content: '';
		}

		50% {
			content: '.';
		}

		75% {
			content: '..';
		}

		100% {
			content: '...';
		}
	}
</style>
