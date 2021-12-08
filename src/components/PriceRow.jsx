import { Tr, Td, Text } from '@chakra-ui/react'
import { toFixed } from '../services/helperFx'
import React from 'react'
const decimalPlaces = 2

const PriceCell = ({ children, ...restProps }) => <Td fontFamily="ExocetBold" fontSize="md" border='1px' borderColor='white'><Text {...restProps} >{children}</Text></Td>

const PriceRow = ({ runeprices, rune, prevRuneprices, onRowClick, widths }) => {
  let bidDiff = runeprices[rune].bidAvg - prevRuneprices[rune].bidAvg
  let askDiff = runeprices[rune].askAvg - prevRuneprices[rune].askAvg
  let bidColor = determineColor(bidDiff)
  let askColor = determineColor(askDiff)
  let midAvg = (runeprices[rune].bidAvg + runeprices[rune].askAvg) / 2
  let prevMidAvg = (prevRuneprices[rune].bidAvg + prevRuneprices[rune].askAvg) / 2
  let percentChange = (midAvg - prevMidAvg) / midAvg
  let changeColor = determineColor(percentChange)

  return (
    <Tr onClick={() => onRowClick(rune)} >
      <PriceCell w='100%' color="brand.orange">{rune}</PriceCell>
      <PriceCell color={bidColor} textAlign='right'>{toFixed(runeprices[rune].bidAvg, decimalPlaces)}<span> fg</span></PriceCell>
      <PriceCell color={askColor} textAlign='right'>{toFixed(runeprices[rune].askAvg, decimalPlaces)}</PriceCell>
      <PriceCell color={changeColor} textAlign='right'>{toFixed(percentChange * 100, decimalPlaces)}%</PriceCell>
      <PriceCell color="brand.white" textAlign='right'>{runeprices[rune].count}</PriceCell>
    </Tr>
  )
}

function determineColor(num) {
  return num > 0 ? 'brand.green' : num === 0 ? 'brand.white' : 'brand.red'
}


export default PriceRow