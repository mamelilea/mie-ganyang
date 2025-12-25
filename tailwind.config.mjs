/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: "class",
	theme: {
		extend: {
            colors: {
                "primary": "#e63746",
                "secondary": "#F4A261",
                "background-light": "#f8f6f6",
                "background-dark": "#1A1A1A",
                "surface": "#2D2D2D",
                "text-primary": "#FFFFFF",
                "text-secondary": "#B0B0B0",
            },
            fontFamily: {
                "display": ["Outfit", "sans-serif"],
                "body": ["Inter", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px",
            },
		},
	},
	plugins: [],
}
