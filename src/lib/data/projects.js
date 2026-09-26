// Central content source for the portfolio.
// Every case study maps to /work/[slug]. Featured projects render full
// case-study pages; additional work renders as compact cards on the home page.
//
// IMAGES: drop real screenshots into /static/shots and update the `image`
// / `gallery` fields. Placeholders are used until then.

export const profile = {
	name: 'Sharon Babu',
	role: 'Full-Stack Developer',
	tagline: 'SvelteKit + Node.js — ERP, HRMS, fintech, and consumer software.',
	summary:
		'Full-stack developer with 3+ years shipping production software across ERP, HRMS, fintech, and consumer domains. I build the whole slice — UI, REST APIs, database schema, real-time interfaces, and deployment — and I like owning quality end to end, client conversations included.',
	location: 'Thrissur, Kerala, India',
	email: 'sharonbabu107@gmail.com',
	phone: '+91 7994330530',
	github: 'https://github.com/sharonbabusharon',
	linkedin: 'https://www.linkedin.com/in/sharon-babu-9669b3245',
	// Headline proof points shown under the hero.
	metrics: [
		{ value: '1M+', label: 'Play Store downloads on the Malayalam editor I own and maintain' },
		{ value: '1,000+', label: 'UAE locations running a payment frontend I built' },
		{ value: '1,000+', label: 'event sites powered by a platform UI I delivered' },
		{ value: '40+', label: 'reusable Svelte components across production products' }
	]
};

export const projects = [
	{
		slug: 'usc-erp',
		featured: true,
		name: 'USC — Low-Code ERP Platform',
		kicker: 'Procurement & Accounts modules',
		summary:
			'A JSON-driven low-code platform that autogenerates full SvelteKit + Node.js ERP applications from configuration. I owned two modules end to end.',
		stack: ['SvelteKit', 'Node.js', 'MSSQL Server 2022', 'WebSocket', 'OpenAI API', 'RBAC'],
		role: 'Full-stack owner of the Procurement and Accounts modules — UI, CRUD, REST APIs, relational schema, and access control — including direct client requirement meetings.',
		status: 'Enterprise · private (UAT)',
		link: null,
		image: '/shots/usc-cover.png',
		what:
			'USC is a configuration-driven ERP engine. Instead of hand-building each client’s system, the platform reads JSON definitions and generates a working SvelteKit + Node.js application — screens, CRUD, and APIs — from config. My work lived inside that engine, delivering the Procurement and Accounts modules that real clients run their operations on.',
		challenge:
			'The hard part is that nothing can be hard-coded. A procurement screen has to be generated from a schema definition, not written by hand, and relational data has to resolve its own foreign keys automatically so a generated form knows how to link a purchase order to a vendor without bespoke code. On top of that, role-based access had to be enforced consistently across every generated view, and I had to translate messy real-world procurement and accounting requirements — gathered directly from clients — into that generic, config-driven model.',
		built: [
			'The Procurement module end to end: purchase workflows, CRUD screens, approvals, and vendor data, all driven by the platform’s JSON config.',
			'The Accounts module, sharing the same generated-UI and API patterns.',
			'Relational MSSQL schemas with automatic foreign-key resolution so generated forms wire up related records without manual mapping.',
			'REST API integration and role-based access control applied consistently across generated views.',
			'OpenAI API integration for AI-assisted SQL query generation and in-editor UI suggestions.'
		],
		outcome:
			'The config-driven approach cut client implementation time by roughly 80% versus building each ERP from scratch. Both modules are in client use through the platform.',
		gallery: [
			// { src: '/shots/usc-1.svg', caption: 'Procurement module — generated CRUD workflow' },
			{ src: '/shots/usc-1.png', caption: 'Procurement module — generated CRUD workflow' },
			{ src: '/shots/usc-2.svg', caption: 'Schema-driven forms with automatic FK resolution' }
		]
	},
	{
		slug: 'bigdates',
		featured: true,
		name: 'BigDates — AI-Powered Event Platform',
		kicker: 'Admin portal, chatbot & photographer tooling',
		summary:
			'A platform where non-technical users build customised event sites. I delivered the majority of the production UI and its photographer-facing tooling.',
		stack: ['SvelteKit', 'Node.js', 'MongoDB', 'REST APIs', 'AI / Chatbot'],
		role: 'Delivered most of the production UI — admin portal, chatbot interfaces, referral tracking — and built the photographer album-upload feature end to end.',
		status: 'Live',
		link: 'https://www.bigdates.ai/',
		// image: '/shots/bigdates-cover.svg',
		image: '/shots/bigdates-cover.png',
		what:
			'BigDates lets non-technical users spin up customised event experiences — invitations, event microsites, and more — powered by dynamic templates, animations, and referral tracking. It also runs a franchise web app where photographers manage and deliver event galleries to clients.',
		challenge:
			'The system had to feel like a simple editor to non-technical users while remaining flexible enough to power thousands of distinct sites from one modular codebase. Separately, the photographer album feature meant handling bulk media uploads and gallery delivery inside the franchise app without a clunky experience.',
		built: [
			'The majority of the production UI, including the admin portal used to manage events and content.',
			'Chatbot / conversational interfaces layered onto the platform.',
			'A modular component system that powers 1,000+ user-generated event sites with dynamic templates and animations.',
			'Referral tracking flows.',
			'The photographer album-upload feature (Node.js + Svelte) that lets photographers manage and deliver event galleries within the franchise web app.'
		],
		outcome:
			'The modular system powers 1,000+ user-generated event sites in production.',
		gallery: [
			// { src: '/shots/bigdates-1.svg', caption: 'Admin portal' },
			{ src: '/shots/bigdates-1.png', caption: 'Admin portal' },
			{ src: '/shots/bigdates-2.svg', caption: 'Photographer album upload & delivery' }
		]
	},
	{
  "slug": "malayalam-editor",
  "featured": true,
  "name": "Malayalam Text & Image Editor — Android & Web",
  "kicker": "End-to-end project ownership · Live web application",
  "summary": "I own the entire Malayalam Text & Image Editor project end to end — product development, system architecture, frontend, backend services, data storage, deployment, and ongoing maintenance.",
  "stack": [
    "SvelteKit",
    "Svelte",
    "Node.js",
    "JavaScript",
    "IndexedDB",
    "REST APIs",
    "Android"
  ],
  "role": "Project owner and full-stack developer — responsible for the complete Android and web product, from product decisions and system architecture through frontend, backend, data storage, deployment, and maintenance.",
  "status": "Live · Ongoing development",
  "link": "https://app.malayalameditor.com/",
  "image": "/shots/malayalam-cover.png",
  "what": "A Malayalam-focused design tool spanning Android and the web. The SvelteKit edition brings layered text and image editing, custom fonts, multi-page documents, saved designs, and community content into the browser. It builds on the Android product, which surpassed 1 million Play Store downloads.",
  "challenge": "The browser and Android clients need to exchange designs without losing text sizing, layer geometry, fonts, or image assets. The web editor also needs predictable state across selection, undo/redo, and page changes, while exported images are produced by a separate rendering service.",
  "built": [
    "End-to-end project ownership across product development, system architecture, frontend, backend services, data storage, deployment, and maintenance.",
    "Layered text and image editing workflows in SvelteKit, with selection controls, alignment snapping, undo/redo, and multi-page design support.",
    "Malayalam font and text handling, alongside Android-compatible design serialization and design-file import/export.",
    "Backend media and rendering services, API integration, and browser asset storage using IndexedDB.",
    "Ongoing feature delivery, deployment, and maintenance across the Android and web product.",
    "Android editing features, including face blur and self-designed Malayalam font packs."
  ],
  "outcome": "I own and maintain the complete project, including the live web application at app.malayalameditor.com. The Android product surpassed 1,000,000 Play Store downloads.",
  "note": "Images below document the Android product and its download history.",
  "gallery": [
    {
      "src": "/shots/malayalam-1.png",
      "caption": "Existing Android product — Play Console download history"
    },
    {
      "src": "/shots/malayalam-2.jpeg",
      "caption": "Existing Android editor with custom Malayalam fonts"
    }
  ]
},
	{
		slug: 'iot-systems',
		featured: true,
		name: 'Freelance IoT — Sensor Monitoring Apps',
		kicker: 'Smart parking · Bus Buddy · temperature — one stack',
		summary:
			'Three similar IoT apps built on the same stack — Arduino sensors, a Node.js API, MongoDB, and a Svelte frontend: a smart parking monitor, Bus Buddy live bus status, and a temperature monitor.',
		stack: ['Svelte', 'Node.js', 'MongoDB', 'Arduino', 'IoT Sensors'],
		role: 'Full-stack / IoT developer — Arduino sensor integration, Node.js APIs, MongoDB data models, and the Svelte admin & user interfaces on all three.',
		status: 'Private client deployments',
		link: null,
		image: '/shots/iot-cover.svg',
		what:
			'Three sensor-driven apps sharing one architecture — Arduino-connected sensors feeding a Node.js + MongoDB backend with a Svelte frontend. Smart Parking uses an ultrasonic sensor to detect when a vehicle is within range of a slot and mark it occupied, so an admin sees availability across many lots and users see which slots are free. Bus Buddy surfaces the live running status of a rider’s current bus. Temperature Monitor tracks readings with live graphing and configurable alert thresholds.',
		challenge:
			'Each app comes down to the same problem: turn a raw sensor signal into reliable, real-time state and keep the admin and user views in sync with what the hardware on the ground actually reports — whether that’s a slot going occupied, a bus’s running status, or a temperature crossing a threshold.',
		built: [
			'Smart Parking — Arduino + ultrasonic sensors detecting per-slot vehicle presence, a Node.js CRUD API, and MongoDB storing lots, slots, and bookings, with an admin multi-lot overview and a user availability view.',
			'Bus Buddy — a live bus-status app giving riders real-time insight into their current bus’s running status.',
			'Temperature Monitor — a remote monitoring interface with live graphing and configurable alert thresholds, deployed in industrial and academic settings.'
		],
		outcome:
			'Three IoT systems replacing manual checks with live, sensor-driven interfaces; deployments served local and academic clients.',
		note: 'Built for local/college clients ~2 years ago; original UI screenshots aren’t available, so the shared architecture is shown as a diagram. Live demo rebuilds are on the roadmap.',
		gallery: []
	},

	/* -------- Additional work (compact cards on home) -------- */
	{
  "slug": "referise-job-portal",
  "featured": false,
  "caseStudy": true,
  "name": "Referise — Job Portal",
  "kicker": "Full frontend ownership",
  "summary": "I own and manage the entire frontend of the job portal — application architecture, reusable components, responsive user experience, state management, and frontend feature delivery.",
  "stack": [
    "SvelteKit",
    "Svelte",
    "JavaScript",
    "Responsive UI",
    "Component Architecture"
  ],
  "role": "Responsible for the complete job portal frontend, managing its architecture, component system, user workflows, and ongoing implementation across the application.",
  "status": "In development",
  "link": null,
  "links": [],
  "what": "A job portal bringing together job discovery, candidate profiles, saved opportunities, and identity and administration interfaces. I am responsible for the full frontend as the product develops.",
  "challenge": "Managing the frontend across the product requires a consistent component architecture, responsive layouts, and predictable application state. Search, filters, saved jobs, and profiles must remain consistent as users navigate between workflows or revisit a search.",
  "built": [
    "Ownership of the complete frontend architecture and reusable Svelte component system across the portal.",
    "Responsive user workflows spanning job discovery, job details, and candidate profiles.",
    "Keyword and location search, filters for work mode, job type, category, experience level, and salary, plus sorting and pagination.",
    "URL-based filter state so a search can be revisited or shared.",
    "Saved jobs and searches, editable profile sections, and browser-local persistence across visits."
  ],
  "outcome": "Ongoing development of the job portal, with full frontend responsibility spanning architecture, implementation, and feature delivery.",
  "gallery": []
},
	{
		slug: 'model-outlook',
		featured: false,
		name: 'Model Outlook — Talent Portfolio Sites',
		summary:
			'Publicly live portfolio sites for models and actors — bio, career stats, responsive layouts, and filterable media galleries. Several remain in active use after handoff.',
		stack: ['SvelteKit', 'Node.js', 'Responsive UI', 'CDN Media'],
		role: 'Built the live portfolio sites — frontend, layout, and media handling.',
		status: 'Several live',
		links: [
			{ label: 'Athul Suresh K', url: 'https://modeloutlook.com/Athul__Suresh__K' },
			{ label: 'Rohan Lona', url: 'https://modeloutlook.com/Rohan_Lona' },
			{ label: 'Heaven Zairah', url: 'https://modeloutlook.com/Heaven_Zairah' },
			{ label: 'Rithu Manthra', url: 'https://modeloutlook.com/Rithu_manthra' }
		]
	},
	{
		slug: 'wow-pay',
		featured: false,
		name: 'MBME WOW Pay — Fintech Payment Frontend',
		summary:
			'Built most of the frontend for a live UAE payment platform operating across 1,000+ locations — secure, responsive transaction flows to compliance standards.',
		stack: ['Svelte', 'JavaScript', 'CSS'],
		role: 'Frontend developer — built most of the transaction-flow UI.',
		status: 'Live',
		links: [{ label: 'mbmepay.com', url: 'https://mbmepay.com/' }]
	},
	{
		slug: 'mbme-hrms',
		featured: false,
		name: 'MBME HRMS — Employee Portal Modules',
		summary:
			'Delivered the Gift Disclosure and Connects modules end to end for MBME Group’s UAE employee portal, including Microsoft SSO — ahead of a rollout projected at 10,000+ employees.',
		stack: ['SvelteKit', 'Node.js', 'MSSQL', 'MongoDB', 'Microsoft SSO'],
		role: 'Full-stack — frontend, REST APIs, data models, and SSO/authorization.',
		status: 'Enterprise · pre-rollout',
		links: []
	},
	{
		slug: 'pixel-master',
		featured: false,
		name: 'Pixel Master — Digital Signage',
		summary:
			'Built the UI for a custom digital-signage application deployed to commercial clients, including the Samridhi@Kochi venue.',
		stack: ['Svelte', 'JavaScript', 'CSS', 'Responsive UI'],
		role: 'Frontend / UI developer.',
		status: 'Deployed to clients',
		links: [{ label: 'Samridhi@Kochi (client)', url: 'https://samridhiatkochi.com/' }]
	}
];

export const featured = projects.filter((p) => p.featured);
export const additional = projects.filter((p) => !p.featured);

export function getProject(slug) {
	return projects.find((p) => p.slug === slug);
}
