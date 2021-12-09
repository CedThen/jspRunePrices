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
      lightGrey: '#3d3f45'
    }
  },
  fonts: {
    heading: 'ExocetBold',
    body: 'ExocetLight',
    Td: 'ExocetLight'
  },
})

export default theme