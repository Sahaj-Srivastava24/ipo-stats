import {type Config} from "tailwindcss";

const customUnits = {
  0.5: '0.5px',
  3: '3px',
  5: '5px',
  6: '6px',
  8: '8px',
  10: '10px',
  11: '11px',
  12: '12px',
  14: '14px',
  15: '15px',
  16: '16px',
  17: '17px',
  18: '18px',
  20: '20px',
  22: '22px',
  24: '24px',
  25: '25px',
  28: '28px',
  30: '30px',
  35: '35px',
  40: '40px',
  50: '50px',
  52: '52px',
  72: '72px',
  87: '87px',
  100: '100px',
  114: '114px',
  115: '115px',
  130: '130px',
  135: '135px',
  150: '150px',
  163: '163px',
  170: '170px',
  175: '175px',
  200: '200px',
  212: '212px',
  230: '230px',
  250: '250px',
  280: '280px',
  300: '300px',
  333: '333px',
  350: '350px',
  460: '460px',
  550: '550px',
  maxW: '500px',

  n20: '-20px',
  n25: '-25px',
  p70: '70%',
  p48: '48%',
  p40: '40%',
  p30: '30%',
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: 'class',
  theme: {
    maxWidth: {},
    minWidth: {},
    colors: {
      textDark: 'var(--nextui-colors-textDark)',
      textLight: 'var(--nextui-colors-textLight)',
      backgroundLight: 'var(--nextui-colors-backgroundLight)',
      backgroundDark: 'var(--nextui-colors-backgroundDark)',

      footerDiv: 'var(--nextui-colors-footerDiv)',

    },
    screens: {
      sm: '375px',
      navLogo: '600px',
      md: '840px',
      lg: '1440px',
    },
    extend: {
      gridTemplateColumns: {
        'scorecard-rows': '1fr 10fr',
        'scorecard-wrapper': '12fr 9fr',
        'scorecard-points': '1fr 1fr 1fr 1fr 1fr 1fr',

        'match-details': '2fr 5fr',
        'scoretable-bat': '5fr 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr',
        'scoretable-des': '5fr 7.5fr',
        'scoretable-bowl': '5fr 1.5fr 1.5fr 1.5fr 1.5fr 2fr 1.5fr',
        'scoretable-fow': '1.5fr 1fr 1fr 2.5fr',
      },
      fontFamily: {
        sans: ['Roboto'],
      },
      backgroundImage: {
        // gradients
        'ipl-affiliate': 'linear-gradient(180deg, #00894D 0%, #6EB34E 100%)',
        'jio-affiliate': 'linear-gradient(180deg, #8E1638 0%, #91143A 100%);',
        'player-highlight': 'linear-gradient(180deg, #FED059 0%, #FFCF54 48.96%, #FFCC47 100%)',

        'news-image-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 19.25%, rgba(0, 0, 0, 0.58) 53.57%, rgba(0, 0, 0, 0.76) 67.45%, rgba(0, 0, 0, 0.91) 81.75%, #000000 100%)',
        'news-bg': 'linear-gradient(180deg, #161616 0%, #111111 100%)',
        'quiz-section':
          'linear-gradient(180deg, rgba(81, 245, 255, 0.63) 0%, rgba(168, 235, 255, 0.724423) 25.52%, #FFFFFF 100%)',
        'btn-blue': 'linear-gradient(90.98deg, #0068C8 -4.09%, #7B00DC 106.62%)',
        'btn-yellow': 'linear-gradient(90.98deg, #FFA800 -4.09%, #DC0076 106.62%)',
        'btn-red': 'linear-gradient(90.98deg, #9D2900 -4.09%, #C1150A 106.62%)',
      },
      spacing: customUnits,
      maxWidth: customUnits,
      borderWidth: customUnits,
      borderColors: {
        footerDiv: 'var(--nextui-colors-footerDiv)',
      },
      lineHeight: {
        24: '24px',
        64: '64px',
      },
      borderRadius: {
        3: '3px',
        4: '4px',
        5: '5px',
        7: '7px',
        10: '10px',
        20: '20px',
        22: '22px',
        26: '26px',
        35: '35px',
        40: '40px',
        50: '50px',
        52: '52px',
      },
      fontSize: {
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        24: '24px',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
        semiBlack: '700',
        black: '900',
      },
      minWidth: customUnits,
      minHeight: customUnits,
    },
    transitionProperty: {},
    transitionDuration: {},
    boxShadow: {
      'team-tab-selected': '0px 0px 10px 0px #FFD055',
    },
    zIndex: {
      neg1: '-1',
      1: '1',
      2: '2',
      3: '3',
      100: '100',
    },
  },
  variants: {
    extend: {
      padding: ['last'],
    },
  },
  plugins: [],
} satisfies Config
