import React, { useState, useEffect, useContext } from 'react'
import { Heading, Box, Text, } from '@chakra-ui/layout';
import Header from './Header';

import { fetchLastAmount } from '../apiRequests';
import LoadingSkeleton from './LoadingSkeleton';
import { responsiveLayouts } from '../themes/styling';
import ResponsiveContext from './ResponsiveContext';
import { baseStyling } from '../themes/styling';

import { NormLayout, MobileLayout } from './Layouts';

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

  if (!data)
    return (<LoadingSkeleton />)

  const layoutProps = {
    data: data,
    setChartedRune,
    chartedRune,
    fetchData
  }

  return (
    <Box style={{ ...baseStyling, width: '100vw', height: '100vh' }} backgroundColor='brand.grey'>
      <Header />
      <Heading {...responsiveLayouts(isMobile).heading} color="brand.white">JSP <Text as="span" color='brand.orange'>Rune</Text> Prices</Heading>
      {isMobile ? <MobileLayout {...layoutProps} /> : <NormLayout {...layoutProps} />}
    </Box>
  );
}

export default Home