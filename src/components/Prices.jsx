import React from 'react'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  Text
} from '@chakra-ui/react'
import PriceRow from './PriceRow'
import { displayLocalTime } from '../services/helperFx'

const HeaderCell = ({ children, ...restProps }) =>
  (<Th width="25%" fontFamily="ExocetBold" fontSize="lg" color="brand.white" fontWeight="light" {...restProps}><Text fontSize="xl" textAlign="center">{children}</Text></Th>)

const Prices = ({ data, onRowClick, chartedRune }) => {
  const { runeprices, createdAt } = data[0]
  const { runeprices: prevRuneprices } = data[1]
  const widths = ['12%', '25%', '25%', '25%', '13%']
  return (
    <Box >
      <Table variant="simple">
        <TableCaption>Updates once an hour. Last updated at {displayLocalTime(createdAt)}</TableCaption>
        <Thead>
          <Tr >
            <HeaderCell w={widths[0]} border='1px' borderColor='white'>Rune</HeaderCell>
            <HeaderCell w={widths[1]} border='1px' borderColor='white'>Bid</HeaderCell>
            <HeaderCell w={widths[2]} border='1px' borderColor='white'>Ask</HeaderCell>
            <HeaderCell w={widths[3]} border='1px' borderColor='white'>% Chg</HeaderCell>
            <HeaderCell w={widths[4]} border='1px' borderColor='white'>Volume</HeaderCell>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(runeprices).map(rune => {
            let isSelected = rune === chartedRune
            return (<PriceRow
              isSelected={isSelected}
              widths={widths}
              runeprices={runeprices}
              rune={rune}
              prevRuneprices={prevRuneprices}
              onRowClick={onRowClick} />)
          })}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Prices