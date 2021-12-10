import { Box, Text, Center } from '@chakra-ui/react'
import { baseStyling } from '../themes/styling';
import { useNavigate } from 'react-router'
import { ArrowBackIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';
import { Grid, GridItem } from '@chakra-ui/react'

const methodology = "This site scrapes d2Jsp for rune prices once an hour, checking the last 100 posts under the \"runes\" filter.\n\nThose results are display"

const About = () => {
  const navigate = useNavigate();
  return (
    <Box style={baseStyling} paddingTop="2%" backgroundColor='brand.grey' fontFamily="Lora">
      <IconButton size="lg" variant="ghost" color="brand.white" icon={<ArrowBackIcon h="39" w="39" />} onClick={() => navigate('/')} position="fixed" top="10" left="10" />
      <Text as="h1" fontSize="40" fontFamily="Lora">About</Text>
      <Grid gridTemplateColumns="1fr 1fr" h="100%" w="100%" gap={20}>
        <GridItem>
          <Center w='100%' h='100%' display='flex' flexDirection='column' padding="20">
            <Text>Methodology</Text>
            <Text></Text>
          </Center>

        </GridItem>
      </Grid>
    </Box>
  )
}
export default About

