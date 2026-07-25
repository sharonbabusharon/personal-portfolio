<script>
	import { profile } from '$lib/data/projects.js';
</script>

<footer>
	<div class="wrap inner">
		<div>
			<p class="big">Let’s build something.</p>
			<a class="mail" href="mailto:{profile.email}">{profile.email}</a>
		</div>
		<div class="links">
			<a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
			<a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
			<a href="mailto:{profile.email}">Email</a>
		</div>
	</div>
	<div class="wrap base">
		<span class="mono">© {profile.name}</span>
		<span class="mono">Built with SvelteKit</span>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--border);
		background: var(--bg-raised);
	}
	.inner {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 32px;
		flex-wrap: wrap;
		padding-block: 56px 28px;
	}
	.big {
		font-size: clamp(1.5rem, 3.4vw, 2.1rem);
		color: var(--ink);
		font-weight: 640;
		letter-spacing: -0.02em;
		margin-bottom: 10px;
	}
	.mail {
		color: var(--accent);
		font-weight: 520;
	}
	.links {
		display: flex;
		gap: 22px;
		font-size: 0.94rem;
	}
	.links a {
		color: var(--ink-soft);
	}
	.links a:hover {
		color: var(--accent);
	}
	.base {
		display: flex;
		justify-content: space-between;
		padding-bottom: 28px;
		color: var(--ink-mute);
	}
	.base .mono {
		color: var(--ink-mute);
		font-size: 0.72rem;
	}
</style>
