<script>
	import { profile, featured, additional } from '$lib/data/projects.js';
	import Reveal from '$lib/components/Reveal.svelte';
</script>

<svelte:head>
	<title>Sharon Babu — Full-Stack Developer</title>
	<meta
		name="description"
		content="Sharon Babu — full-stack developer (SvelteKit + Node.js). Case studies across ERP, HRMS, fintech, and consumer apps, including a 1M+ download Android app."
	/>
</svelte:head>

<!-- HERO -->
<section class="hero wrap">
	<Reveal>
		<p class="eyebrow">Full-Stack Developer · SvelteKit + Node.js</p>
		<h1>
			I build and ship production software —
			<span class="accent">end to end.</span>
		</h1>
		<p class="lead">{profile.summary}</p>
		<div class="actions">
			<a class="btn btn-primary" href="#work">View work</a>
			<a class="btn btn-ghost" href="mailto:{profile.email}">Get in touch</a>
		</div>
		<div class="meta mono">
			<a href={profile.github} target="_blank" rel="noreferrer">github</a>
			<span>·</span>
			<a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>
			<span>·</span>
			<span>{profile.location}</span>
		</div>
	</Reveal>
</section>

<!-- METRICS -->
<section class="wrap">
	<Reveal>
		<div class="metrics">
			{#each profile.metrics as m}
				<div class="metric">
					<div class="val">{m.value}</div>
					<div class="lbl">{m.label}</div>
				</div>
			{/each}
		</div>
	</Reveal>
</section>

<!-- FEATURED WORK -->
<section id="work" class="section wrap">
	<Reveal>
		<div class="sec-head">
			<p class="eyebrow">Selected work</p>
			<h2>Four projects, in depth.</h2>
		</div>
	</Reveal>

	<div class="feature-list">
		{#each featured as p, i}
			<Reveal delay={i * 40}>
				<a class="feature" href="/work/{p.slug}/">
					<div class="feature-media">
						<img src={p.image} alt={p.name} loading="lazy" />
					</div>
					<div class="feature-body">
						<div class="feature-top">
							<span class="idx mono">0{i + 1}</span>
							<span class="status mono">{p.status}</span>
						</div>
						<h3>{p.name}</h3>
						<p class="kicker">{p.kicker}</p>
						<p class="fsum">{p.summary}</p>
						<div class="tagrow">
							{#each p.stack.slice(0, 5) as t}
								<span class="tag">{t}</span>
							{/each}
						</div>
						<span class="link-arrow">
							Read case study
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none"
								><path d="M3 8h9M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6"
									stroke-linecap="round" stroke-linejoin="round" /></svg
							>
						</span>
					</div>
				</a>
			</Reveal>
		{/each}
	</div>
</section>

<!-- ADDITIONAL WORK -->
<section class="section wrap addwrap">
	<Reveal>
		<div class="sec-head">
			<p class="eyebrow">Additional work</p>
			<h2>More that shipped.</h2>
		</div>
	</Reveal>
	<div class="add-grid">
		{#each additional as p, i}
			<Reveal delay={i * 40}>
				<div class="add-card">
					<div class="add-top">
						<h3>{p.name}</h3>
						<span class="status mono">{p.status}</span>
					</div>
					<p>{p.summary}</p>
					<div class="tagrow">
						{#each p.stack as t}
							<span class="tag">{t}</span>
						{/each}
					</div>
					{#if p.links && p.links.length}
						<div class="add-links">
							{#each p.links as l}
								<a href={l.url} target="_blank" rel="noreferrer" class="link-arrow sm">
									{l.label}
									<svg width="14" height="14" viewBox="0 0 16 16" fill="none"
										><path d="M6 3h7v7M13 3 4 12" stroke="currentColor" stroke-width="1.6"
											stroke-linecap="round" stroke-linejoin="round" /></svg
									>
								</a>
							{/each}
						</div>
					{/if}
				</div>
			</Reveal>
		{/each}
	</div>
</section>

<!-- ABOUT -->
<section id="about" class="section wrap">
	<div class="about">
		<Reveal>
			<div>
				<p class="eyebrow">About</p>
				<h2>Full-slice ownership, without a handoff.</h2>
			</div>
		</Reveal>
		<Reveal delay={60}>
			<div class="about-body">
				<p>
					I’m a full-stack developer based in {profile.location}, with 3+ years building
					production software at Binary Technologies and on freelance engagements. My work spans a
					low-code ERP engine, a UAE HRMS portal, a fintech payment frontend running across 1,000+
					locations, and a consumer Android app that passed a million downloads.
				</p>
				<p>
					I like owning a feature from schema to screen — REST APIs, MSSQL/MongoDB data models,
					real-time WebSocket interfaces, authentication, and the UI on top — and talking to
					clients directly rather than working from a spec over the wall. I review every line I
					ship, including the parts AI helps me write.
				</p>
				<div class="skills">
					<div>
						<span class="mono lbl">Frontend</span>
						<p>SvelteKit, Svelte, JavaScript, TypeScript, responsive UI, component architecture</p>
					</div>
					<div>
						<span class="mono lbl">Backend</span>
						<p>Node.js, Express, REST APIs, WebSocket, real-time event handling</p>
					</div>
					<div>
						<span class="mono lbl">Data</span>
						<p>MSSQL Server 2022, MongoDB, schema design, query optimisation</p>
					</div>
					<div>
						<span class="mono lbl">Platform</span>
						<p>OAuth 2.0, Microsoft SSO, RBAC, OpenAI API, JSON low-code, Git</p>
					</div>
				</div>
			</div>
		</Reveal>
	</div>
</section>

<style>
	.hero {
		padding-block: clamp(56px, 11vw, 120px) 40px;
	}
	.hero h1 {
		margin: 18px 0 22px;
		max-width: 16ch;
	}
	.accent {
		color: var(--accent);
	}
	.hero .lead {
		max-width: 60ch;
	}
	.actions {
		display: flex;
		gap: 12px;
		margin: 30px 0 22px;
		flex-wrap: wrap;
	}
	.meta {
		display: flex;
		gap: 10px;
		align-items: center;
		color: var(--ink-mute);
		font-size: 0.78rem;
	}
	.meta a:hover {
		color: var(--accent);
	}

	.metrics {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		background: var(--border);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		overflow: hidden;
	}
	.metric {
		background: var(--bg-raised);
		padding: 26px 22px;
	}
	.val {
		font-size: clamp(1.7rem, 3.4vw, 2.3rem);
		font-weight: 660;
		letter-spacing: -0.03em;
		color: var(--accent);
	}
	.lbl {
		font-size: 0.86rem;
		color: var(--ink-soft);
		margin-top: 6px;
		line-height: 1.45;
	}
	@media (max-width: 760px) {
		.metrics {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.sec-head {
		margin-bottom: 40px;
	}
	.sec-head h2 {
		margin-top: 8px;
	}

	.feature-list {
		display: flex;
		flex-direction: column;
		gap: 28px;
	}
	.feature {
		display: grid;
		grid-template-columns: 1.05fr 1fr;
		gap: 0;
		background: var(--bg-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		transition: box-shadow 0.28s var(--ease), transform 0.28s var(--ease),
			border-color 0.28s var(--ease);
	}
	.feature:hover {
		box-shadow: var(--shadow-lg);
		transform: translateY(-3px);
		border-color: var(--border-strong);
	}
	.feature-media {
		background: var(--bg-sunken);
		border-right: 1px solid var(--border);
		aspect-ratio: 16 / 11;
		overflow: hidden;
	}
	.feature-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s var(--ease);
	}
	.feature:hover .feature-media img {
		transform: scale(1.03);
	}
	.feature-body {
		padding: 28px 30px;
		display: flex;
		flex-direction: column;
	}
	.feature-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--ink-mute);
		font-size: 0.72rem;
		margin-bottom: 14px;
	}
	.idx {
		color: var(--accent);
		font-weight: 600;
	}
	.status {
		color: var(--ink-mute);
	}
	.feature-body h3 {
		font-size: 1.35rem;
	}
	.kicker {
		color: var(--ink-mute);
		font-size: 0.9rem;
		margin: 4px 0 12px;
	}
	.fsum {
		font-size: 0.98rem;
		margin-bottom: 18px;
		flex-grow: 1;
	}
	.feature-body .tagrow {
		margin-bottom: 20px;
	}

	.addwrap {
		background: var(--bg-sunken);
		border-block: 1px solid var(--border);
		max-width: none;
		padding-inline: 0;
	}
	.addwrap :global(.reveal),
	.addwrap .sec-head,
	.addwrap .add-grid {
		width: 100%;
		max-width: var(--maxw);
		margin-inline: auto;
		padding-inline: 24px;
	}
	.add-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
	.add-card {
		background: var(--bg-raised);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: 24px;
		transition: border-color 0.22s var(--ease), box-shadow 0.22s var(--ease);
	}
	.add-card:hover {
		border-color: var(--border-strong);
		box-shadow: var(--shadow-md);
	}
	.add-top {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 12px;
		margin-bottom: 10px;
	}
	.add-top h3 {
		font-size: 1.08rem;
	}
	.add-card p {
		font-size: 0.94rem;
		margin-bottom: 14px;
	}
	.add-links {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 14px;
	}
	.link-arrow.sm {
		font-size: 0.85rem;
	}

	.about {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: 40px;
	}
	.about-body p {
		margin-bottom: 16px;
		font-size: 1.02rem;
	}
	.skills {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 22px;
		margin-top: 30px;
		padding-top: 26px;
		border-top: 1px solid var(--border);
	}
	.skills .lbl {
		color: var(--accent);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	.skills p {
		font-size: 0.92rem;
		margin-top: 6px;
		margin-bottom: 0;
	}

	@media (max-width: 860px) {
		.feature {
			grid-template-columns: 1fr;
		}
		.feature-media {
			border-right: none;
			border-bottom: 1px solid var(--border);
		}
		.about {
			grid-template-columns: 1fr;
			gap: 22px;
		}
	}
	@media (max-width: 620px) {
		.add-grid {
			grid-template-columns: 1fr;
		}
		.skills {
			grid-template-columns: 1fr;
		}
	}
</style>
