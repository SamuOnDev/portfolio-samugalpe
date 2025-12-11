/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#020617',
                'bg-alt': '#020617',
                accent: '#6366f1'
            },
            maxWidth: {
                content: '1120px'
            },
            boxShadow: {
                soft: '0 18px 45px rgba(0,0,0,0.6)',
                glow: '0 0 0 1px rgba(99,102,241,0.15), 0 25px 60px rgba(0,0,0,0.55)'
            },
            borderRadius: {
                xl2: '1.25rem'
            },
            keyframes: {
                blob: {
                    '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
                    '33%': { transform: 'translate3d(18px,-10px,0) scale(1.05)' },
                    '66%': { transform: 'translate3d(-12px,16px,0) scale(0.98)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' }
                },
                shimmer: {
                    '0%, 100%': { backgroundPosition: '48% 52%' },
                    '50%': { backgroundPosition: '52% 48%' }
                }
            },
            animation: {
                blob: 'blob 18s ease-in-out infinite',
                float: 'float 6s ease-in-out infinite',
                shimmer: 'shimmer 60s ease-in-out infinite'
            }
        }
    },
    plugins: []
};
