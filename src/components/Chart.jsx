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
import { Box } from '@chakra-ui/react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const options = (title) => {
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
          color: 'white',
          font: {
            family: "Exocet",
            size: 15
          }
        }
      },
      xAxes: {
        ticks: {
          color: 'white',
          font: {
            family: "Exocet",
            size: 15
          }
        }
      }
    },


    maintainAspectRatio: false
  };
}

function Chart({ data, chartedRune, }) {
  const d = splitRunes(data)
  const labels = extractTimeLabels(data).reverse()
  const chartData = {
    labels,
    datasets: [
      {
        label: chartedRune,
        data: d[chartedRune].reverse(),
        borderColor: colors.lineBorder,
        backgroundColor: colors.lineBackground,
      }
    ],

  }
  return (
    // <Box w="100%" h="100%" p="5px">
    <Line data={chartData} options={options(chartedRune)} width="90%" height="80%" />
    // </Box>
  )
}

export default Chart