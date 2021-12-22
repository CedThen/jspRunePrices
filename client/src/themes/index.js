import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// This is the default breakpoint
const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})


const theme = extendTheme({
  colors: {
    brand: {
      green: '#26ff00',
      red: '#ff0f00',
      grey: '#202124',
      orange: '#ffa800',
      white: '#ffffff',
      black: '#000000',
      lightGrey: '#2c2e33',
    }
  },
  fonts: {
    heading: 'ExocetBold',
  },
  components: {
    Text: {
      baseStyle: {
        color: 'brand.white'
      }
    }
  }
})

export default theme