<script>
	import { profile } from '$lib/data/projects.js';
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header class:scrolled>
	<nav class="wrap">
		<a class="brand" href="/">
			<span class="dot"></span>
			Sharon Babu
		</a>
		<div class="links">
			<a href="/#work">Work</a>
			<a href="/#about">About</a>
			<a class="cta" href="mailto:{profile.email}">Get in touch</a>
		</div>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: color-mix(in srgb, var(--bg) 82%, transparent);
		backdrop-filter: saturate(1.4) blur(10px);
		border-bottom: 1px solid transparent;
		transition: border-color 0.25s var(--ease), background 0.25s var(--ease);
	}
	header.scrolled {
		border-bottom-color: var(--border);
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 62px;
	}
	.brand {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		font-weight: 600;
		letter-spacing: -0.01em;
	}
	.dot {
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--accent);
	}
	.links {
		display: flex;
		align-items: center;
		gap: 26px;
		font-size: 0.94rem;
	}
	.links a {
		color: var(--ink-soft);
		transition: color 0.18s var(--ease);
	}
	.links a:hover {
		color: var(--ink);
	}
	.cta {
		color: var(--accent) !important;
		font-weight: 520;
	}
	@media (max-width: 560px) {
		.links a:not(.cta) {
			display: none;
		}
	}
</style>
