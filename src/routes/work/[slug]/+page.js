import { error } from '@sveltejs/kit';
import { projects, getProject } from '$lib/data/projects.js';

export const prerender = true;

// Only featured projects have full case-study pages.
export function entries() {
	return projects.filter((p) => p.featured).map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
	const project = getProject(params.slug);
	if (!project || !project.featured) throw error(404, 'Project not found');
	return { project };
}
