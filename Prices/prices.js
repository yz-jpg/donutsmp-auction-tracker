// Tailwind configuration — must be defined before loading the Tailwind CDN script
(function () {
	window.tailwind = window.tailwind || {};
	window.tailwind.config = {
		darkMode: "class",
		theme: {
			extend: {
				colors: {
					primary: "#0EA5E9",
					secondary: "#3B82F6",
					"background-light": "#FDFCFD",
					"background-dark": "#0A0A0B",
					accent: "#3B82F6",
					success: "#22C55E",
					terminal: "#0A0A0B",
				},
				fontFamily: {
					display: ["Space Grotesk", "sans-serif"],
					sans: ["Plus Jakarta Sans", "sans-serif"],
					mono: ["JetBrains Mono", "monospace"],
				},
				borderRadius: {
					DEFAULT: "1.25rem",
				},
			},
		},
	};
})();

