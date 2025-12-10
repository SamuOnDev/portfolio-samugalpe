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
            'content': '1120px'
        },
        boxShadow: {
            soft: '0 18px 45px rgba(0,0,0,0.6)'
        },
        borderRadius: {
            xl2: '1.25rem'
        }
        }
    },
    plugins: []
};
