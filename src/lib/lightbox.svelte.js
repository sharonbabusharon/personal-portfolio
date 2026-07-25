// Shared lightbox state + a `use:zoom` action that makes any <img> open it.
// Usage:  <img src=... alt=... use:zoom />  and render <Lightbox /> once in the layout.

export const lb = $state({ src: null, alt: '' });

export function openLightbox(src, alt = '') {
	lb.src = src;
	lb.alt = alt;
}

export function closeLightbox() {
	lb.src = null;
	lb.alt = '';
}

export function zoom(node) {
	const open = () => openLightbox(node.currentSrc || node.getAttribute('src'), node.alt || '');
	node.style.cursor = 'zoom-in';
	node.addEventListener('click', open);
	return {
		destroy() {
			node.removeEventListener('click', open);
		}
	};
}
