module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
 
     
        fontFamily: {
          'Nunito': ['"Nunito"'],
          
        },
  
        colors:{
          black : {
            light : "#8A8A8E",
            deep : '#22292E'
          },
          green : {
            light : "#E4F3EA",
            deep : "#54B175"
          },
          orange : {
            light : "#FFECE8",
            deep : "#FE6E4C"
          },
          yellow : {
            light : "#FFF6E4",
            deep : "#FEBF43"
          },
          purple : {
            light : "#F1EDFC",
            deep : "#9B81E5"
          },
          blue : {
            light : "#DDF5F4",
            deep : "#03B0A9"
          },
          gray : {
            light : "#E5E5EA",
          
          },
          white : "#ffffff",
          red : "#FF3B30",
        },
      

       
   


  },
  variants: {
    extend: {
      colors: {
        'abc': '#54B175',

      }
    },
  },
  plugins: [

    //   function ({addUtilities}) {
    //     const extendUnderline = {
    //         '.line-through': {
    //             'textDecoration': 'line-through',
    //             'text-decoration-color': 'red',
    //         },
    //     }
    //     addUtilities(extendUnderline)
    // }
  ],
}
