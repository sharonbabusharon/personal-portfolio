<script>
	import Reveal from '$lib/components/Reveal.svelte';
	import { zoom } from '$lib/lightbox.svelte.js';
	let { data } = $props();
	let p = $derived(data.project);
</script>

<svelte:head>
	<title>{p.name} — Sharon Babu</title>
	<meta name="description" content={p.summary} />
</svelte:head>

<article>
	<!-- Header -->
	<header class="wrap head">
		<a class="back link-arrow" href="/#work">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
				><path d="M13 8H4M7 4 3 8l4 4" stroke="currentColor" stroke-width="1.6"
					stroke-linecap="round" stroke-linejoin="round" /></svg
			>
			All work
		</a>
		<p class="eyebrow">{p.kicker}</p>
		<h1>{p.name}</h1>
		<p class="lead">{p.summary}</p>

		<div class="facts">
			<div class="fact">
				<span class="mono k">Role</span>
				<p>{p.role}</p>
			</div>
			<div class="fact">
				<span class="mono k">Stack</span>
				<div class="tagrow">
					{#each p.stack as t}<span class="tag">{t}</span>{/each}
				</div>
			</div>
			<div class="fact">
				<span class="mono k">Status</span>
				<p>{p.status}</p>
				{#if p.link}
					<a class="link-arrow sm" href={p.link} target="_blank" rel="noreferrer">
						Visit live site
						<svg width="14" height="14" viewBox="0 0 16 16" fill="none"
							><path d="M6 3h7v7M13 3 4 12" stroke="currentColor" stroke-width="1.6"
								stroke-linecap="round" stroke-linejoin="round" /></svg
						>
					</a>
				{/if}
			</div>
		</div>
	</header>

	<!-- Cover -->
	<div class="wrap">
		<Reveal>
			<figure class="cover">
				<img src={p.image} alt={p.name} use:zoom />
			</figure>
		</Reveal>
	</div>

	<!-- Body -->
	<div class="wrap body">
		<Reveal>
			<section class="block">
				<h2>What it is</h2>
				<p>{p.what}</p>
			</section>
		</Reveal>

		<Reveal>
			<section class="block">
				<h2>The technical challenge</h2>
				<p>{p.challenge}</p>
			</section>
		</Reveal>

		<Reveal>
			<section class="block">
				<h2>What I built</h2>
				<ul class="built">
					{#each p.built as b}
						<li>{b}</li>
					{/each}
				</ul>
			</section>
		</Reveal>

		<Reveal>
			<section class="block outcome">
				<h2>Outcome &amp; scale</h2>
				<p>{p.outcome}</p>
				{#if p.note}
					<p class="note"><span class="mono k">Note</span> {p.note}</p>
				{/if}
			</section>
		</Reveal>

		{#if p.gallery && p.gallery.length}
			<Reveal>
				<section class="block">
					<h2>Screens</h2>
					<div class="gallery">
						{#each p.gallery as g}
							<figure>
								<img src={g.src} alt={g.caption} loading="lazy" use:zoom />
								<figcaption class="mono">{g.caption}</figcaption>
							</figure>
						{/each}
					</div>
				</section>
			</Reveal>
		{/if}
	</div>

	<div class="wrap next">
		<a class="btn btn-ghost" href="/#work">← Back to all work</a>
	</div>
</article>

<style>
	.head {
		padding-block: 40px 30px;
		max-width: 820px;
	}
	.back {
		font-size: 0.88rem;
		margin-bottom: 26px;
	}
	.head h1 {
		margin: 12px 0 18px;
	}
	.facts {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-top: 34px;
		padding-top: 28px;
		border-top: 1px solid var(--border);
	}
	.fact .k {
		display: block;
		color: var(--accent);
		font-size: 0.7rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-bottom: 8px;
	}
	.fact p {
		font-size: 0.92rem;
		color: var(--ink-soft);
	}
	.fact .link-arrow.sm {
		font-size: 0.85rem;
		margin-top: 10px;
	}
	.cover {
		aspect-ratio: 16 / 9;
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		background: var(--bg-sunken);
		margin-top: 10px;
	}
	.cover img {
		width: 100%;
		height: 100%;
		/*object-fit: cover;*/
		object-fit: contain;
	}
	.body {
		max-width: 760px;
		padding-block: 20px 40px;
	}
	.block {
		padding-block: 30px;
		border-bottom: 1px solid var(--border);
	}
	.block:last-child {
		border-bottom: none;
	}
	.block h2 {
		font-size: 1.3rem;
		margin-bottom: 14px;
	}
	.block p {
		font-size: 1.04rem;
		line-height: 1.7;
	}
	.built {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.built li {
		position: relative;
		padding-left: 26px;
		color: var(--ink-soft);
		font-size: 1.02rem;
		line-height: 1.6;
	}
	.built li::before {
		content: '';
		position: absolute;
		left: 4px;
		top: 11px;
		width: 7px;
		height: 7px;
		border-radius: 2px;
		background: var(--accent);
	}
	.outcome {
		background: var(--accent-soft);
		border: 1px solid color-mix(in srgb, var(--accent) 18%, transparent);
		border-radius: var(--radius);
		padding: 24px 26px;
	}
	.outcome h2 {
		color: var(--accent);
	}
	.note {
		font-size: 0.9rem !important;
		color: var(--ink-mute) !important;
		margin-top: 14px;
	}
	.note .k {
		color: var(--accent);
		margin-right: 6px;
	}
	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}
	.gallery figure {
		border: 1px solid var(--border);
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--bg-sunken);
	}
	.gallery img {
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
	}
	.gallery figcaption {
		padding: 10px 12px;
		font-size: 0.72rem;
		color: var(--ink-mute);
		border-top: 1px solid var(--border);
		background: var(--bg-raised);
	}
	.next {
		padding-block: 20px 70px;
	}
	@media (max-width: 700px) {
		.facts {
			grid-template-columns: 1fr;
			gap: 18px;
		}
		.gallery {
			grid-template-columns: 1fr;
		}
	}
</style>
