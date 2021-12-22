import React from 'react'

import { Heading, Grid, GridItem, Box, Text } from '@chakra-ui/layout';
import { Skeleton, Stack } from '@chakra-ui/react'
import { baseStyling } from '../themes/styling';
import ResponsiveContext from './ResponsiveContext';
import { responsiveLayouts } from '../themes/styling';
import Header from './Header';

const LoadingSkeleton = () => {
  const isMobile = React.useContext(ResponsiveContext)
  const skellyArray = Array.from({ length: 14 }, (v, i) => i + 1)

  const DefaultSkelly = () =>
    <Grid className="body" gridTemplateColumns="2fr 3fr" h="100%" w="100%" gap={10} paddingTop="20">
      <GridItem >
        <Stack>
          {skellyArray.map(() => <Skeleton height="30px" paddingBottom="10" color="brand.orange" startColor='brand.lightGrey' endColor='brand.grey' />)}
        </Stack>
      </GridItem>
      <GridItem style={{ width: '100%', height: '80%', paddingRight: '10px' }}>
        <Skeleton height="700px" padding="5" color="brand.orange" startColor='brand.lightGrey' endColor='brand.grey' />
      </GridItem>
    </Grid>

  const MobileSkelly = () =>
    <Stack width="300px">
      {skellyArray.map(() => <Skeleton height="30px" paddingBottom="10" color="brand.orange" startColor='brand.lightGrey' endColor='brand.grey' />)}
    </Stack>

  return (
    <Box style={{ ...baseStyling, height: '100vh' }} backgroundColor='brand.grey'>
      <Header />
      <Heading {...responsiveLayouts(isMobile).heading} color="brand.white">JSP <Text as="span" color='brand.orange'>Rune</Text> Prices</Heading>
      {isMobile ? <MobileSkelly /> : <DefaultSkelly />}
    </Box>
  )
}

export default LoadingSkeleton