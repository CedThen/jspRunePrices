import React, { useState, useEffect } from 'react'
import { Heading, Grid, GridItem, Box, Text, } from '@chakra-ui/layout';
import Header from './Header';
import Chart from './Chart';
import Prices from './Prices';
import { fetchLastAmount } from '../apiRequests';
// import { baseStyling } from '../themes/styling';
import LoadingSkeleton from './LoadingSkeleton';
import { useMediaQuery } from 'react-responsive'

const Home = () => {
  const [data, setData] = useState();
  const [chartedRune, setChartedRune] = useState('ber') // string
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' }) ? 'mobile' : 'default'

  async function fetchData(amount = 24) {
    const response = await fetchLastAmount(amount)
    setData(response)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const NormLayout = () => (<Grid className="body" gridTemplateColumns="2fr 3fr" h="100%" w="100%" gap={5}>
    <GridItem style={{ width: '100%', height: '80%' }}>
      <Prices isMobile={isMobile} data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} chartedRune={chartedRune} />
    </GridItem>
    <GridItem style={{ width: '100%', height: '80%', padding: '10px' }}>
      <Chart data={data} chartedRune={chartedRune} fetchData={fetchData} />
    </GridItem>
  </Grid>)

  const MobileLayout = () => (
    <>
      <Prices isMobile={isMobile} w="100%" data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} chartedRune={chartedRune} />
      <Chart data={data} chartedRune={chartedRune} fetchData={fetchData} />
    </>
  )

  const responsiveLayouts = {
    heading: {
      default: {
        size: "3xl",
        padding: "20px"
      },
      mobile: {
        size: 'xl',
        padding: '10px'
      }
    }
  }

  const baseStyling = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    // paddingLeft: '20px',
    // paddingRight: '20px',

  }

  if (!data)
    return (<LoadingSkeleton isMobile={isMobile} />)

  return (
    <Box style={baseStyling} backgroundColor='brand.grey'>
      <Header isMobile={isMobile} />
      <Heading {...responsiveLayouts.heading[isMobile]} color="brand.white">JSP <Text as="span" color='brand.orange'>Rune</Text> Prices</Heading>
      {isMobile === 'mobile' ? <MobileLayout /> : <NormLayout />}

    </Box>
  );
}

export default Home