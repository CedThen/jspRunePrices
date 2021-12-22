import React, { useState, useEffect, useContext } from 'react'
import { Heading, Grid, GridItem, Box, Text, } from '@chakra-ui/layout';
import Header from './Header';
import Chart from './Chart';
import Prices from './Prices';
import { fetchLastAmount } from '../apiRequests';
import LoadingSkeleton from './LoadingSkeleton';

import ResponsiveContext from './ResponsiveContext';

const Home = () => {
  const [data, setData] = useState();
  const [chartedRune, setChartedRune] = useState('ber') // string
  async function fetchData(amount = 24) {
    const response = await fetchLastAmount(amount)
    setData(response)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const isMobile = useContext(ResponsiveContext)

  const NormLayout = () => (<Grid className="body" gridTemplateColumns="2fr 3fr" h="100%" w="100%" gap={5}>
    <GridItem style={{ width: '100%', height: '80%' }}>
      <Prices data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} chartedRune={chartedRune} />
    </GridItem>
    <GridItem style={{ width: '100%', height: '80%', padding: '10px' }}>
      <Chart data={data} chartedRune={chartedRune} fetchData={fetchData} />
    </GridItem>
  </Grid>)

  const MobileLayout = () => (
    <>
      <Prices maxWidth="100%" w="100%" data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} chartedRune={chartedRune} />
      <Chart data={data} chartedRune={chartedRune} fetchData={fetchData} />
    </>
  )

  const responsiveLayouts = (isMobile) => {
    const defaultLayout = {
      heading: {
        size: "3xl",
        padding: "20px"
      }
    }
    const mobileLayout = {
      heading: {
        size: 'xl',
        padding: '10px',
      }
    }
    return isMobile ? mobileLayout : defaultLayout
  }

  const baseStyling = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '100%',
    height: isMobile === 'mobile' ? '200vh' : '100vh',
    overflowX: 'hidden',
    paddingLeft: '20px',
    paddingRight: '20px',

  }

  if (!data)
    return (<LoadingSkeleton />)

  return (
    <Box style={baseStyling} backgroundColor='brand.grey'>
      <Header />
      <Heading {...responsiveLayouts(isMobile).heading} color="brand.white">JSP <Text as="span" color='brand.orange'>Rune</Text> Prices</Heading>
      {isMobile ? <MobileLayout /> : <NormLayout />}

    </Box>
  );
}

export default Home