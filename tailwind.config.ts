import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#12101e",
				foreground: "#ffffff",
				cosmicBlue: "#46f8c5",
				electricMagenta: "#fb39ff",
				deepViolet: "#9116ec",
				mintGreen: "#8ffed4",
				accentBeige: "#D9C2AD",
				acidYellow: "#C1BC00",
				vividRed: "#F23005",
			},
			fontFamily: {
				sans: ["var(--font-benzin)", "sans-serif"],
			},
		},
	},
	plugins: [],
};

export default config;
