import { Heading, Grid, GridItem, Box, Text } from '@chakra-ui/layout';
import { Skeleton, Stack } from '@chakra-ui/react'
import { baseStyling } from '../themes/styling';

const LoadingSkeleton = () => {
  const skellyArray = Array.from({ length: 14 }, (v, i) => i + 1)

  return (
    <Box style={baseStyling} backgroundColor='brand.grey'>
      <Heading size="3xl" padding="20px" color="brand.white">JSP <Text as="span" color='brand.orange'>Rune</Text> Prices</Heading>
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
    </Box>
  )
}

export default LoadingSkeleton