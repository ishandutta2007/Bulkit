const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      minHeight: {
        '1-75': '1.75rem',
      },
      minWidth: {
        '160': '10rem',
      },
      height: {
        "1-25": '0.125rem',
        '2-875': '2.875rem',
        '3-125': '3.125rem',
        '180': '11.25rem',
      },
      colors: {
        'fabian': '#4A00E0',
        'tx': '#363636',
        'db': 'dbdbdb',
        'square-5': '#8b51ff',
        '999': '#999',
        '87': '#878787',
        'segment': "#444F60",
        'sec-title': '#A9ABAC',
      },
      maxWidth: {
        '7560': '7560px',
        '1152': '1152px',
        '960': '960px',
        '640': '640px',
        '840': '840px',
        '12': '3rem',
      },
      width: {
        '3-125': '3.125rem',
        '180': '11.25rem',
        '1173': '1173px',
        '1200': '1200px',
      },
      padding: {
        "1-375": '1.375rem',
        '1-875': '1.875rem',
        '3-75': '3.75rem',
      },
      inset: {
        'm-22': '-1.375rem',
        '5': '1.25rem',
        "2": '0.125rem',
        '220': '13.75rem',
        '40': '10rem',
        '60': '3.75rem',
        'm-60': '-3.75rem',
        '80': '5rem',
      },
      rotate: {
        '36': '36deg',
        '38': '38deg',
        '24': '24deg',
        '146': '146deg',
      },
      margin: {
        '0-375': '0.375rem',
        '1-875': '1.875rem',
      },
      fontSize: {
        'h2': '2.5rem',
        'h4': '1.4rem',
        '12': '0.75rem',
      },
      borderRadius: {
        '2-25': '2.25rem',
      },
    },
  },
  variants: { 
    customPlugin: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
    require('@tailwindcss/ui'),
      plugin(function({ addUtilities, variants }) {
      const newUtilities = {
        '.isRounded': {
          borderRadius: '290486px',
        },
        '.is-hero-title': {
          zIndex: 2
        },
        '.square-3': {
          opacity: '0.2',
          zIndex: 2,
        },
        '.square-4': {
          left: '30%',
          borderRadius: '1rem',
          zIndex: 2
        },
        '.square-5': {
          left: '20%',
          borderRadius: '1.25rem',
          opacity: '.7',
          zIndex: 2
        },
        '.square-6': {
          right: '10%',
          border: '2px solid #4A00E0',
          zIndex: 2
        },
        '.square-7': {
          left: '15%',
          border: '2px solid #4A00E0',
          zIndex: 2,
        },
        '.container': {
          zIndex: 1
        },
        '.input': {
          border: '1px solid #e5e5e5',
          boxShadow: '-1px 3px 15px 0 rgba(0,0,0,0.06) !important',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease',
          transitionDelay: '0s', 
          paddingTop: 'calc(0.5em - 1px)',
          fontSize: '1.2rem',
        },
        '.input-btn': {
          paddingLeft: 'calc(1em + 0.25em)',
          paddingRight: 'calc(1em + 0.25em)',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease',
          transitionDelay: '0s', 
          paddingBottom: 'calc(0.5em - 1px)',
          paddingTop: 'calc(0.5em - 1px)',
          border: '1px solid transparent',
        },
        '.inputTextProps': {
          textRendering: 'auto',
          letterSpacing: 'normal',
          wordSpacing: 'normal',
          textIndent: '0px',
          textTransform: "none",
          font: '400 13.3333px Arial',
        },
        '.w-25-pt': {
          width: '25%',
        },
        '.app-feature-h3': {
          borderbottom: '2px solid #c2c2c2',
          fontSize: '100%',
        },
        '.marketing': {
          border: '1px solid #ededed',
          borderRadius: '6px',
          boxShadow: '-1px 3px 15px 0 rgba(0,0,0,0.06)',
          zIndex: '3',
        },
        '.section': {
          position: 'relative',
          padding: '3rem 1.5rem',
          outline: 'none',
        },
        '.section-title': {
          fontSize: '2.7rem',
          fontWeight: "bold",
          fontFamily: 'Nexa-Bold, sans-serif',
          lineHeight: '1.125'
        },
        '.no-margin': {
          margin: '0 !important',
        },
        '.dark-text': {
          color: '#444F60 !important',
        },
        '.section-feature-description': {
          fontSize: '1rem',
          color: '#878787',
        },
        '.slick-slider': {
          touchAction: 'pan-y',
        },
        '.slick-custom': {
          top: '41%',
          border: '1px solid transparent',  
          borderRadius: '100px',
          color: '#444F60',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease',
          transitionDelay: '0s', 
          zIndex: 999,
        },
        '.fa': {
          font: 'normal normal normal 14px/1 FontAwesome',
        },
        '.slick-list': {
          transform: 'translate3d(0, 0, 0)',
        },
      }

      addUtilities(newUtilities, variants('customPlugin'))
    })
  ],
}
