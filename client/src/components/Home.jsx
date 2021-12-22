import React, { useState, useEffect, useContext } from 'react'
import { Heading, Grid, GridItem, Box, Text, } from '@chakra-ui/layout';
import Header from './Header';
import Chart from './Chart';
import Prices from './Prices';
import { fetchLastAmount } from '../apiRequests';
import LoadingSkeleton from './LoadingSkeleton';
import { responsiveLayouts } from '../themes/styling';
import ResponsiveContext from './ResponsiveContext';
import { baseStyling } from '../themes/styling';

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

  const NormLayout = () => (
    <Grid className="body" gridTemplateColumns="2fr 3fr" h="100%" w="100%" gap={5}>
      <GridItem style={{ width: '100%', height: '80%' }}>
        <Prices data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} chartedRune={chartedRune} />
      </GridItem>
      <GridItem style={{ width: '100%', height: '80%', padding: '10px' }}>
        <Chart data={data} chartedRune={chartedRune} fetchData={fetchData} />
      </GridItem>
    </Grid>
  )

  const MobileLayout = () => (
    <>
      <Prices maxWidth="100%" w="100%" data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} chartedRune={chartedRune} />
      <Chart data={data} chartedRune={chartedRune} fetchData={fetchData} />
    </>
  )

  if (!data)
    return (<LoadingSkeleton />)

  return (
    <Box style={{ ...baseStyling, width: '100vw' }} backgroundColor='brand.grey'>
      <Header />
      <Heading {...responsiveLayouts(isMobile).heading} color="brand.white">JSP <Text as="span" color='brand.orange'>Rune</Text> Prices</Heading>
      {isMobile ? <MobileLayout /> : <NormLayout />}
    </Box>
  );
}

export default Home