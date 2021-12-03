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

const Prices = ({ data }) => {
  const { runeprices, createdAt } = data
  // console.log(`runeprices`, runeprices)

  return (
    <Box w="30vw" display="flex" alignItems="center" justifyContent="center">
      <Table variant="striped" colorScheme="red">
        <TableCaption>Last updated at {createdAt}</TableCaption>
        <Thead>
          <Tr>
            <Th>Rune</Th>
            <Th>Bid Avg</Th>
            <Th>Ask Avg</Th>
            <Th># Posts in last hr</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(runeprices).map(rune => {
            return (
              <Tr>
                <Th>{rune}</Th>
                <Th isNumeric>{toFixed(runeprices[rune].bidAvg, decimalPlaces)}</Th>
                <Th isNumeric>{toFixed(runeprices[rune].askAvg, decimalPlaces)}</Th>
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