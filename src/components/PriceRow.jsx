import { Tr, Td, Text } from '@chakra-ui/react'
import { toFixed } from '../services/helperFx'
import React from 'react'
import RunePngs from './RunePngs'
const decimalPlaces = 2

const PriceCell = ({ children, ...restProps }) => <Td fontFamily="ExocetBold" border="0.5px" borderColor="white"><Text {...restProps} fontSize="lg" >{children}</Text></Td>

const PriceRow = ({ runeprices, rune, prevRuneprices, onRowClick, isSelected }) => {
  let bidDiff = runeprices[rune].bidAvg - prevRuneprices[rune].bidAvg
  let askDiff = runeprices[rune].askAvg - prevRuneprices[rune].askAvg
  let bidColor = determineColor(bidDiff)
  let askColor = determineColor(askDiff)
  let midAvg = (runeprices[rune].bidAvg + runeprices[rune].askAvg) / 2
  let prevMidAvg = (prevRuneprices[rune].bidAvg + prevRuneprices[rune].askAvg) / 2
  let percentChange = (midAvg - prevMidAvg) / midAvg
  let changeColor = determineColor(percentChange)

  return (
    <Tr onClick={() => onRowClick(rune)} _hover={{ background: 'brand.lightGrey' }} backgroundColor={isSelected ? 'brand.lightGrey' : 'brand.grey'}>
      <PriceCell w='100%' color="brand.orange" display="flex" flexDirection="row">{RunePngs(rune)}{rune}</PriceCell>
      <PriceCell color={bidColor} textAlign='right'>{toFixed(runeprices[rune].bidAvg, decimalPlaces)}<span></span></PriceCell>
      <PriceCell color={askColor} textAlign='right'>{toFixed(runeprices[rune].askAvg, decimalPlaces)}</PriceCell>
      <PriceCell color={changeColor} textAlign='right'>{toFixed(percentChange * 100, decimalPlaces)}%</PriceCell>
      <PriceCell textAlign='right'>{runeprices[rune].count}</PriceCell>
    </Tr>
  )
}

function determineColor(num) {
  return num > 0 ? 'brand.green' : num === 0 ? 'brand.white' : 'brand.red'
}


export default PriceRow