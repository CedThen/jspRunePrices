import { fetchLastAmount } from './apiRequests/'
import React, { useEffect, useState } from 'react'
import Prices from './components/Prices'
import Chart from './components/Chart'
import { Heading, Box, Grid, GridItem, Text, Center } from '@chakra-ui/react'

const baseStyling = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  paddingLeft: '20px',
  paddingRight: '20px'
}

function App() {
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

export default App;
/*
  about section - methodology, when last updated was
  refresh button somewhere
  use rune pictures next to runes
  apply theme throughout app
  resizing responsiveness
    https://www.chartjs.org/docs/latest/configuration/responsive.html

  features
    make chart smarter
    add some buffer to chart so points aren't at the min and max of chart
    select timeframes for charting
      will need to review how data is retrieved from db for this
    add skeleton for loading in / handle loading screen better

*/