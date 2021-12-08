import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      green: '#1BB711',
      red: '#cd0d01',
      grey: '#202124',
      orange: '#ffa800',
      white: '#ffffff',
      black: '#000000'
    }
  },
  fonts: {
    heading: 'ExocetBold',
    body: 'ExocetLight',
    Td: 'ExocetLight'
  },
})

export default theme