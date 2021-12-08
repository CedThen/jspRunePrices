import { fetchLastAmount } from './apiRequests/'
import React, { useEffect, useState } from 'react'
import Prices from './components/Prices'
import Chart from './components/Chart'
import { Heading, Box, Grid, GridItem } from '@chakra-ui/react'


function App() {
  const [data, setData] = useState();
  const [chartedRune, setChartedRune] = useState('jah') // string

  async function fetchData() {
    const response = await fetchLastAmount(24)
    setData(response)
  }
  useEffect(() => {
    fetchData()
  }, [])


  if (!data) return (<div>Loading</div>)

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        padding: '20px',
      }} backgroundColor='brand.grey'>
      <Heading size="3xl" padding="20px" color="brand.white">JSP Rune Prices</Heading>
      <Grid className="body" gridTemplateColumns="2fr 3fr" h="100%" w="100%" gap={5}>
        <GridItem style={{ width: '100%', height: '100%' }}>
          {data && (<Prices data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} />)}
        </GridItem>
        <GridItem style={{ width: '100%', height: '100%', padding: '10px' }}>
          {data && <Chart data={data} chartedRune={chartedRune} />}
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
