import { extendTheme } from '@chakra-ui/react'

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
      veryLightGrey: 'rgb(44,46,51,0.25)'
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