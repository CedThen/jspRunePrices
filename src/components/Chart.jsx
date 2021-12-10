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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const tickStyle = {
  color: 'white',
  font: {
    family: "Exocet",
    size: 15
  },
}

const options = (title, data) => {
  return {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleColor: 'white',
        titleFont: {
          family: "Exocet",
          size: 15
        },

        bodyColor: colors.d2Orange,
        bodyFont: {
          family: "Exocet",
          size: 15
        }
      },
      title: {
        display: true,
        text: title,
        color: colors.d2Orange,
        font: {
          family: "Exocet",
          size: 40
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
        ticks: tickStyle
      }
    },
    maintainAspectRatio: false,
  };
}

function Chart({ data, chartedRune, }) {
  const splitData = splitRunes(data)
  const runeData = splitData[chartedRune].reverse()
  const labels = extractTimeLabels(data).reverse()
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
    <Box w="100%" h="100%">
      <Line data={chartData} options={options(chartedRune, runeData)} width="90%" height="80%" />
      <Center><Text fontFamily="Exocet" fontSize="xl">Chart Options </Text></Center>
    </Box>
  )
}

export default Chart