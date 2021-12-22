import React from 'react'
import {
  Box, Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,

} from '@chakra-ui/react'
import ResponsiveContext from './ResponsiveContext'
import { LinkIcon } from '@chakra-ui/icons'

const CinzText = ({ children, ...restProps }) => <Text {...restProps} fontFamily="Cinzel">{children}</Text>

const Header = () => {
  const isMobile = React.useContext(ResponsiveContext)
  const responsiveHeader = {
    mobile: {
      w: '100%',
      h: "5%",
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px'
    },
    default: {
      position: "fixed",
      top: "10",
      right: "20",
      display: "flex",
      flexDirection: "row"
    }
  }

  return (
    <Box
      {...responsiveHeader[isMobile]}
    >
      <a href="https://forums.d2jsp.org/forum.php?f=268&c=2">
        <Text fontFamily="Exocet" fontSize="20" ><LinkIcon /> d2Jsp</Text>
      </a>
      <Popover>
        <PopoverTrigger>
          <Text fontFamily="Exocet" fontSize="20" paddingLeft="50" cursor="pointer">About</Text>
        </PopoverTrigger>
        <PopoverContent backgroundColor="brand.grey">
          <PopoverArrow />
          <PopoverHeader>
            <CinzText align="center" fontSize="lg">Methodology</CinzText>
          </PopoverHeader>
          <PopoverBody>
            <CinzText >This data is collected once an hour from the latest 100 posts under the "runes" filter on d2Jsp for softcore d2R. The weekly and monthly views will work once enough data has been collected (should have enough by 1/11/21)</CinzText>
            <br />
            <CinzText >This should not be considered a definitive authority on rune pricing, as its data processing is imperfect and cannot handle all the jargon out there. </CinzText>
            <br />
            <CinzText>
              However, I hope it helps make understanding rune pricing easier.
            </CinzText>
          </PopoverBody>
          <PopoverHeader></PopoverHeader>
          <PopoverFooter>
            <CinzText >Questions?</CinzText>
            <CinzText>Reach me at cedthen@gmail.com</CinzText>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Box>
  )
}

export default Header