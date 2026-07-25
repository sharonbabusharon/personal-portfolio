<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	let { children } = $props();
</script>

<Nav />
<main>
	{@render children?.()}
</main>
<Footer />
<Lightbox />

<style>
	main {
		min-height: 60vh;
	}
</style>
