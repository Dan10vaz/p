const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['sans-serif', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'ce-primary-color': '#3f9571',
                'ce-light-primary-color': '#5ee0aa',
                'ce-dark-primary-color': '#235440',
                'ce-accent': '#953f63',
                'ce-red': '#ff5252',
                'ce-primary-text': '#212121',
                'ce-secondary-text': '#dbdbdb',
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
