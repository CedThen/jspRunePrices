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
import ResponsiveContext from './ResponsiveContext'


const HeaderCell = ({ children, ...restProps }) =>
  (<Th fontFamily="ExocetBold" fontSize="sm" fontWeight="light" border='1px' {...restProps}><Text fontSize="sm" textAlign="center">{children}</Text></Th>)

const Prices = ({ data, onRowClick, chartedRune }) => {
  const { runeprices, createdAt } = data[0]
  const { runeprices: prevRuneprices } = data[1]

  return (
    <Box w='100%'>
      <Table variant="simple">
        <TableCaption>Updates once an hour. Last updated at {displayLocalTime(createdAt)}</TableCaption>
        <Thead>
          <Tr >
            <HeaderCell borderColor='white'>Rune</HeaderCell>
            <HeaderCell borderColor='white'>Bid</HeaderCell>
            <HeaderCell borderColor='white'>Ask</HeaderCell>
            <HeaderCell borderColor='white'>% Chg</HeaderCell>
            <HeaderCell borderColor='white'>Vol</HeaderCell>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(runeprices).map(rune => {
            let isSelected = rune === chartedRune
            return (<PriceRow
              isSelected={isSelected}
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