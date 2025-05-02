// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'sans-serif'], // Default body text
                mono: ['var(--font-geist-mono)', 'monospace'], // Code/numbers
                montserrat: ['var(--font-montserrat)', 'sans-serif'], // Headings
                playfair: ['var(--font-playfair-display)', 'serif'], // Elegant accents
                roboto: ['var(--font-roboto)', 'sans-serif'], // Alternative body
            },
        },
    },
};