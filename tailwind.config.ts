import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        SFProRounded: ['SF-Pro-Rounded', 'sans-serif'],
      },
      screens: {
        tablet: { max: '769px' },
        phone: { max: '390px' },
        customerPhone: { max: '383px' },
      },
      colors: {
        gray1: '#F2F2EF',
        gray2: '#EDEDED',
        gray3: '#2A2F4166',
        headerGray: '#f9f9f7',
        textGray: '#00000066',
        titleGray: '#00000099',
        select: '#FF4A4A',
        mapBlack: '#000000',
        mapWhite: '#ffffff',
        mapBlue: '#081321',
        main: '#23446C',
        backgroundLine: '#21242F',

        text: {
          primary: '#FFFFFFCC',
          subtitles: '#D2D5DF',
          secondary: '#FFFFFF80',
        },
        input: {
          stroke: '#21242F',
          background: '#0A1829',
          error: '#B65050',
        },
        button: {
          action: '#2A88F9',
          actions2: '#E9A13D',
          secondary2: '#0A1829',
        },
        surface: {
          DEFAULT: '#090817',
        },
      },
      gap: {
        gapAdap: '1rem',
        gapFix: '16px',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require, @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/line-clamp')],
} satisfies Config
