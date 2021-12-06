import { fetchLastAmount } from './apiRequests/'
import React, { useEffect, useState } from 'react'
import Prices from './components/Prices'
// import ChartDisplay from './components/ChartDisplay'
import Chart from './components/Chart'
import { Heading } from '@chakra-ui/react'

function App() {
  const [data, setData] = useState();
  // const [isChartOpen, setIsChartOpen] = useState(false)
  const [chartedRune, setChartedRune] = useState('jah') // string
  async function fetchData() {
    const response = await fetchLastAmount(24)
    setData(response)
  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(`data`, data)
  // clicking on a rune row will open up a chart 
  function onRowClick(rune) {
    console.log(`rune click: `, rune)
    setChartedRune(rune)
  }
  if (!data) return (<div>Loading</div>)

  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100vw', height: '100vh' }}>
      <Heading>JSP Rune Prices</Heading>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100vw', height: '100%' }}>
        {data && (<Prices data={[data[0], data[1]]} onRowClick={onRowClick} />)}
        {data && <Chart data={data} chartedRune={chartedRune} />}
      </div>
    </div>
  );
}

export default App;
