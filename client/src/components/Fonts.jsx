import { Global } from '@emotion/react'

const boldUrl = '../fonts/exocetBold.ttf'
const lightUrl = '../fonts/exocetLight.ttf'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'ExocetBold';
        font-style: normal;
        src: url('${boldUrl}') format('truetype');        
      },
      @font-face {
        font-family: 'ExocetLight';
        font-style: normal;
        src: url('${lightUrl}') format('truetype');        
      }
      `}
  />
)

export default Fonts