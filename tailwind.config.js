module.exports = {
    content: ['./layouts/**/*.vue', './pages/**/*.vue', './components/**/*.vue'],
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            xl: '1250px'
            // => @media (min-width: 1250px) { ... }
        },
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {
            fontFamily: {
                Roboto: ['Roboto', 'sans-serif']
            },
            colors: {
                'primary-50': '#F2FDF9',
                'primary-100': '#E6FCF3',
                'primary-200': '#BFF6E0',
                'primary-300': '#99F1CD',
                'primary-400': '#4DE7A8',
                'primary-500': '#00DC82',
                'primary-600': '#00C675',
                'primary-700': '#00844E',
                'primary-800': '#00633B',
                'primary-900': '#004227'
            }
        }
    }
}
