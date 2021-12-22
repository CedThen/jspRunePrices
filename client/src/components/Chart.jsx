import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { extractTimeLabels, splitRunes } from '../services/helperFx'
import { colors } from '../themes/colors'
import { Box, Center, Text } from '@chakra-ui/react'
import TimeFrameRadio from './TimeFrameRadio'
import { determineMaxTicks } from '../services/helperFx'
import ResponsiveContext from './ResponsiveContext';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fontStyle = {
  family: "Exocet",
  size: 15
}

const tickStyle = {
  color: 'white',
  font: fontStyle
}

const options = (title, data, isMobile) => {
  const maxTicksLimit = isMobile ? 5 : determineMaxTicks(data.length)

  return {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleColor: 'white',
        titleFont: fontStyle,

        bodyColor: colors.d2Orange,
        bodyFont: fontStyle
      },
      title: {
        display: true,
        text: title,
        color: colors.d2Orange,
        font: {
          ...fontStyle,
          size: isMobile ? 20 : 40
        }
      },
    },
    scales: {
      yAxes: {
        ticks: {
          ...tickStyle,
          callback: (val) => {
            return ('    ' + val)
          },
        },
      },
      xAxes: {
        // type: 'time',
        ticks: {
          ...tickStyle,
          maxTicksLimit: maxTicksLimit
        }
      }
    },
    maintainAspectRatio: false,
  };
}

function Chart({ data, chartedRune, fetchData }) {
  const splitData = splitRunes(data)
  // only reversing one rune's dataSet at a time instead of reversing all 14 of them
  const runeData = splitData[chartedRune].reverse()
  const labels = extractTimeLabels(data).reverse()
  const isMobile = React.useContext(ResponsiveContext)
  const chartData = {
    labels,
    datasets: [
      {
        label: chartedRune,
        data: runeData,
        borderColor: colors.lineBorder,
        backgroundColor: colors.lineBackground,
      }
    ],
  }

  return (
    <Box w="100%" h={isMobile ? "50%" : '100%'} >
      <Line data={chartData} options={options(chartedRune, runeData, isMobile)} width="90%" height="80%" />
      <Center padding="20px" display="flex" flexDirection="column">
        <Text fontFamily="Exocet" fontSize="xl">Timeframe</Text>
        <TimeFrameRadio fetchData={fetchData} />
      </Center>
    </Box>
  )
}

export default Chart