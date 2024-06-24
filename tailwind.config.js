/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--bg-primary)',
        'secondary-color': 'var(--bg-secondary)',
        'purple-color': 'var(--bg-purple)',
        'yellow-color': 'var(--bg-yellow)',
        'gray-color': 'var(--text-grey)',
        'white-color': 'var(--text-white)',
      },
    },
    container: {
      padding: '16px',
      'max-width': '1400px',
      center: true,
    },
  },
  plugins: [],
};
