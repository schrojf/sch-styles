/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts}"],
    // Toggle dark-mode based on .dark class or data-mode="dark"
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {},
    },
    plugins: [],
};
