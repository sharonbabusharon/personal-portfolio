// Generates branded placeholder SVGs so the site looks complete before you
// drop in real screenshots. Replace anything in /static/shots with real images.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shots = join(root, 'static', 'shots');
mkdirSync(shots, { recursive: true });

const ACCENT = '#1e3a8a';
const INK = '#17181a';

function placeholder(label, sub) {
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4f4f1"/>
      <stop offset="1" stop-color="#eaeefb"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#e0e0da" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1280" height="800" fill="url(#g)"/>
  <rect width="1280" height="800" fill="url(#grid)"/>
  <circle cx="150" cy="150" r="7" fill="${ACCENT}"/>
  <text x="150" y="380" font-family="'JetBrains Mono',monospace" font-size="22" fill="${ACCENT}" letter-spacing="3">SCREENSHOT</text>
  <text x="150" y="440" font-family="Inter,system-ui,sans-serif" font-size="52" font-weight="700" fill="${INK}">${label}</text>
  <text x="150" y="490" font-family="Inter,system-ui,sans-serif" font-size="24" fill="#74767c">${sub}</text>
  <text x="150" y="650" font-family="'JetBrains Mono',monospace" font-size="16" fill="#a0a09a">Replace with a real screenshot in /static/shots</text>
</svg>`;
}

const files = {
	'usc-cover.png': ['USC — Low-Code ERP', 'Procurement & Accounts modules'],
	'usc-1.png': ['Procurement module', 'Generated CRUD workflow'],
	'usc-2.svg': ['Schema-driven forms', 'Automatic foreign-key resolution'],
	'bigdates-cover.png': ['BigDates', 'AI-powered event platform'],
	'bigdates-1.png': ['Admin portal', 'Event & content management'],
	'bigdates-2.svg': ['Album upload', 'Photographer gallery delivery'],
	'malayalam-cover.png': ['Malayalam Editor', '1M+ Play Store downloads'],
	'malayalam-1.png': ['Play Console', 'Add your 1M+ downloads screenshot'],
	'malayalam-2.svg': ['Editor', 'Custom Malayalam fonts'],
	'iot-cover.svg': ['IoT Monitoring', 'Sensors → cloud → live dashboard'],
	'iot-1.svg': ['Live dashboard', 'Real-time graphing & alerts']
};

for (const [name, [label, sub]] of Object.entries(files)) {
	writeFileSync(join(shots, name), placeholder(label, sub));
}

// Favicon: deep-blue rounded square with an S monogram.
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="${ACCENT}"/>
  <text x="16" y="23" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="700" fill="#fff" text-anchor="middle">S</text>
</svg>`;
writeFileSync(join(root, 'static', 'favicon.svg'), favicon);

console.log('Generated', Object.keys(files).length, 'placeholders + favicon.');
