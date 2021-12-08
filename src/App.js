import { fetchLastAmount } from './apiRequests/'
import React, { useEffect, useState } from 'react'
import Prices from './components/Prices'
import Chart from './components/Chart'
import { Heading, Box } from '@chakra-ui/react'


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
    <Box className="App"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        padding: '20px',
      }}>
      <Heading >JSP Rune Prices</Heading>
      <Box className="body" style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
        <Box style={{ width: '40%', height: '90%' }}>
          {data && (<Prices data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} />)}
        </Box>
        <Box style={{ width: '90%', height: '100%', padding: '10px' }}>
          {data && <Chart data={data} chartedRune={chartedRune} />}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
