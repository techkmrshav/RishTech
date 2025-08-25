import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				classic: {
					gold: 'hsl(var(--metallic-gold))',
					blue: 'hsl(var(--classic-blue))',
					purple: 'hsl(var(--royal-purple))',
					burgundy: 'hsl(var(--burgundy))',
					emerald: 'hsl(var(--emerald))',
					silver: 'hsl(var(--classic-silver))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-royal': 'var(--gradient-royal)',
				'gradient-emerald': 'var(--gradient-emerald)',
				'gradient-classic': 'var(--gradient-classic)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'premium': 'var(--shadow-premium)',
				'classic': 'var(--shadow-classic)',
				'royal': 'var(--shadow-royal)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
					'33%': { transform: 'translateY(-10px) rotateZ(1deg)' },
					'66%': { transform: 'translateY(-5px) rotateZ(-1deg)' }
				},
				'pulse-glow': {
					'0%': { 
						boxShadow: '0 0 20px hsl(var(--accent) / 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 50px hsl(var(--accent) / 0.6)',
						transform: 'scale(1.02)'
					},
					'100%': { 
						boxShadow: '0 0 20px hsl(var(--accent) / 0.3)',
						transform: 'scale(1)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'slide-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(50px) rotateX(10deg)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'scale-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.8) rotateY(10deg)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1) rotateY(0deg)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0) scale(1)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(-8px) scale(1.02)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'rotate-slow': {
					'from': {
						transform: 'rotate(0deg)'
					},
					'to': {
						transform: 'rotate(360deg)'
					}
				},
				'wiggle': {
					'0%, 7%': {
						transform: 'rotateZ(0)'
					},
					'15%': {
						transform: 'rotateZ(-15deg)'
					},
					'20%': {
						transform: 'rotateZ(10deg)'
					},
					'25%': {
						transform: 'rotateZ(-10deg)'
					},
					'30%': {
						transform: 'rotateZ(6deg)'
					},
					'35%': {
						transform: 'rotateZ(-4deg)'
					},
					'40%, 100%': {
						transform: 'rotateZ(0)'
					}
				},
				'heartbeat': {
					'0%': {
						transform: 'scale(1)'
					},
					'14%': {
						transform: 'scale(1.05)'
					},
					'28%': {
						transform: 'scale(1)'
					},
					'42%': {
						transform: 'scale(1.05)'
					},
					'70%': {
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'fade-in': 'fade-in 0.8s ease-out',
				'scale-in': 'scale-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'wiggle': 'wiggle 1s ease-in-out',
				'heartbeat': 'heartbeat 1.5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
