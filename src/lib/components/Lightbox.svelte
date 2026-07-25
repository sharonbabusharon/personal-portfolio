<script>
	import { lb, closeLightbox } from '$lib/lightbox.svelte.js';

	// Lock scroll + close on Escape while the popup is open.
	$effect(() => {
		if (!lb.src) return;
		const onKey = (e) => e.key === 'Escape' && closeLightbox();
		window.addEventListener('keydown', onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			window.removeEventListener('keydown', onKey);
			document.body.style.overflow = prev;
		};
	});
</script>

{#if lb.src}
	<div
		class="lb"
		role="dialog"
		aria-modal="true"
		aria-label="Image preview"
		tabindex="-1"
		onclick={closeLightbox}
		onkeydown={(e) => e.key === 'Escape' && closeLightbox()}
	>
		<button class="lb-close" aria-label="Close preview" onclick={closeLightbox}>×</button>
		<!-- stop propagation so clicking the image itself doesn't close -->
		<img src={lb.src} alt={lb.alt} onclick={(e) => e.stopPropagation()} />
		{#if lb.alt}<p class="lb-cap">{lb.alt}</p>{/if}
	</div>
{/if}

<style>
	.lb {
		position: fixed;
		inset: 0;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 14px;
		padding: 4vmin;
		background: rgba(17, 18, 20, 0.86);
		backdrop-filter: blur(4px);
		cursor: zoom-out;
		animation: lb-in 0.18s ease;
	}
	.lb img {
		max-width: 94vw;
		max-height: 84vh;
		object-fit: contain;
		border-radius: 8px;
		background: #fff;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
		cursor: default;
	}
	.lb-cap {
		margin: 0;
		text-align: center;
		color: #e6e5e0;
		font-family: var(--font-mono);
		font-size: 0.82rem;
	}
	.lb-close {
		position: absolute;
		top: 18px;
		right: 22px;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		border: none;
		background: rgba(255, 255, 255, 0.12);
		color: #fff;
		font-size: 1.7rem;
		line-height: 1;
		cursor: pointer;
		transition: background 0.15s ease;
	}
	.lb-close:hover {
		background: rgba(255, 255, 255, 0.24);
	}
	@keyframes lb-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.lb {
			animation: none;
		}
	}
</style>
