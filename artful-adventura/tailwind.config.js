/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			fontFamily: {
				moranga: ["Moranga", "serif"]
			},
			colors: {
				"light-gray": "#ecf0f1",
				gold: "#f39c12",
				"dark-blue": "#2c3e50",
				"medium-blue": "#2980b9"
			},
			keyframes: {
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out-up": {
					"0%": {
						opacity: "1",
						transform: "translateY(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translateY(-10px)"
					}
				}
			},
			animation: {
				"fade-in-down": "fade-in-down 0.5s ease-out",
				"fade-out-up": "fade-out-up 0.5s ease-in"
			}
		}
	},
	plugins: []
};
