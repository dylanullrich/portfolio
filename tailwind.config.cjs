/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        textShadow: {
          sm: '0 1px 2px var(--tw-shadow-color)',
          DEFAULT: '0 2px 4px var(--tw-shadow-color)',
          lg: '0 8px 16px var(--tw-shadow-color)',
        },
        dropShadow: {
          custom: '0 2px 4px var(--tw-shadow-color)'
        },
        animation: {
          fadeOut: 'fadeOut 2s ease-in-out',
          fadeIn: 'fadeIn 2s ease-in-out',
          pingSlow:'pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite',

        },
        scale: {
          '175': '1.75',
          '200': '2',
        },
        keyframes: theme => ({
          fadeOut: {
            '0%': { opacity: theme('opacity.0') },
            '100%': { opacity: theme('opacity.100') },
          },
          fadeIn: {
            '100%': { opacity: theme('opactity.100') },
            '0%': { opacity: theme('opacity.0') },
          },
          pingSlow: {
            '75%': { scale: theme('scale.150') },
            '100%': { opacity: theme('opacity.0') },
          },
        }),
      },
    },
    plugins: [require('@tailwindcss/typography'),
      require('@tailwindcss/container-queries'),
      (function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
        )
      }),
    ],
  };
