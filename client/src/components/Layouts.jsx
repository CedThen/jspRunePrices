import React from 'react'
import { Grid, GridItem } from '@chakra-ui/layout';
import Chart from './Chart';
import Prices from './Prices';


export const NormLayout = ({ data, setChartedRune, chartedRune, fetchData }) => (
  <Grid className="body" gridTemplateColumns="2fr 3fr" h="100%" w="100%" gap={5}>
    <GridItem style={{ width: '100%', height: '80%' }}>
      <Prices data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} chartedRune={chartedRune} />
    </GridItem>
    <GridItem style={{ width: '100%', height: '80%', padding: '10px' }}>
      <Chart data={data} chartedRune={chartedRune} fetchData={fetchData} />
    </GridItem>
  </Grid>
)

export const MobileLayout = ({ data, setChartedRune, chartedRune, fetchData }) => (
  <>
    <Prices maxWidth="100%" w="100%" data={[data[0], data[1]]} onRowClick={(rune) => setChartedRune(rune)} chartedRune={chartedRune} />
    <Chart maxHeight="300px" data={data} chartedRune={chartedRune} fetchData={fetchData} />
  </>
)

