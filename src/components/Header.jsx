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

import { LinkIcon } from '@chakra-ui/icons'

const Header = () => {
  return (
    <Box
      position="fixed"
      top="10"
      right="20"

      display="flex"
      flexDirection="row"
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
            <Text fontFamily="Lora" fontSize="lg">Methodology</Text>
          </PopoverHeader>
          <PopoverBody>
            <Text fontFamily="Lora">The data displayed is collected once an hour from the latest 100 posts under the "runes" filter on d2Jsp.</Text>
            <br />
            <Text fontFamily="Lora">This should not be considered a definitive authority on rune pricing, as its data processing is unable to handle the multitude of jargon out there.
              However, I hope it helps make understanding rune pricing easier.
            </Text>
          </PopoverBody>
          <PopoverHeader></PopoverHeader>
          <PopoverFooter>
            <Text fontFamily="Lora">Questions? Job offers?</Text>
            <Text>I'm available at cedthen@gmail.com</Text>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Box>
  )
}

export default Header