import React from 'react'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
} from '@chakra-ui/react'
import { toFixed } from '../services/helperFx'

const decimalPlaces = 2

const Prices = ({ data, onRowClick }) => {
  const { runeprices, createdAt } = data[0]
  const { runeprices: prevRuneprices } = data[1]

  return (
    <Box >
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Last updated at {createdAt}</TableCaption>
        <Thead>
          <Tr>
            <Th>Rune</Th>
            <Th>Bid Avg</Th>
            <Th>Ask Avg</Th>
            <Th>% Change</Th>
            <Th># Posts in last hr</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(runeprices).map(rune => {
            let bidDiff = runeprices[rune].bidAvg - prevRuneprices[rune].bidAvg
            let askDiff = runeprices[rune].askAvg - prevRuneprices[rune].askAvg
            let bidColor = bidDiff > 1 ? 'green' : bidDiff === 0 ? 'black' : 'red'
            let askColor = askDiff > 1 ? 'green' : askDiff === 0 ? 'black' : 'red'
            let percentChange = (runeprices[rune].askAvg - prevRuneprices[rune].askAvg) / runeprices[rune].askAvg
            return (
              <Tr onClick={() => onRowClick(rune)} _hover={{ background: 'blue' }}>
                <Th>{rune}</Th>
                <Th isNumeric color={bidColor} >{toFixed(runeprices[rune].bidAvg, decimalPlaces)}<span> fg</span></Th>
                <Th isNumeric color={askColor}>{toFixed(runeprices[rune].askAvg, decimalPlaces)}</Th>
                <Th >{toFixed(percentChange, decimalPlaces)}</Th>
                <Th isNumeric>{runeprices[rune].count}</Th>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Prices