import React, { useState, useEffect } from 'react'
import { Heading, Grid, GridItem, Box, Text } from '@chakra-ui/layout';
import Header from './Header';
import Chart from './Chart';
import Prices from './Prices';
import { fetchLastAmount } from '../apiRequests';

const baseStyling = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  paddingLeft: '20px',
  paddingRight: '20px'
}

const Home = () => {
  const [data, setData] = useState();
  const [chartedRune, setChartedRune] = useState('ber') // string

  async function fetchData() {
    const response = await fetchLastAmount(24)
    setData(response)
  }
  useEffect(() => {
    fetchData()
  }, [])


  if (!data) return (<div>Loading</div>)

  return (
    <Box style={baseStyling} backgroundColor='brand.grey'>
      <Header />
      <Heading size="3xl" padding="20px" color="brand.white">JSP <Text as="span" color='brand.orange'>Rune</Text> Prices</Heading>
      <Grid className="body" gridTemplateColumns="2fr 3fr" h="100%" w="100%" gap={5}>
        <GridItem style={{ width: '100%', height: '80%' }}>
          {data && (<Prices data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} chartedRune={chartedRune} />)}
        </GridItem>
        <GridItem style={{ width: '100%', height: '80%', padding: '10px' }}>
          {chartedRune && <Chart data={data} chartedRune={chartedRune} />}
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home