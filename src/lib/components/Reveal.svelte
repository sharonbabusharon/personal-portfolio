<script>
	// Fade-and-rise on scroll. Subtle, respects reduced-motion via CSS.
	let { children, delay = 0 } = $props();
	let el = $state(null);
	let shown = $state(false);

	$effect(() => {
		if (!el) return;
		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						shown = true;
						io.disconnect();
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
		);
		io.observe(el);
		return () => io.disconnect();
	});
</script>

<div bind:this={el} class="reveal" class:in={shown} style="transition-delay: {delay}ms">
	{@render children?.()}
</div>
