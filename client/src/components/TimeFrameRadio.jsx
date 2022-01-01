import { useRadio, Box, useRadioGroup, Grid, GridItem, Text } from '@chakra-ui/react'
import { timeFrameHash } from '../services/helperFx'
const TimeFrameRadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'brand.lightGrey',
          color: 'white',
          // borderColor: 'brand.lightGrey',
        }}
        // _focus={{
        //   boxShadow: 'outline',
        // }}
        _hover={{
          bg: 'brand.lightGrey',
          color: 'white',
        }}
        px={5}
        py={3}
      >
        <Text fontFamily="Exocet">{props.children}</Text>
      </Box>
    </Box>
  )
}

const TimeFrameRadio = ({ fetchData }) => {
  const options = ['Daily', "Weekly", "Monthly"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'Timeframe',
    defaultValue: 'Daily',
    onChange: (timeFrame) => fetchData(timeFrameHash[timeFrame]),
  })
  const group = getRootProps()
  return (
    <Box {...group} display="flex" flexDirection="row">
      <Grid templateColumns="1fr 1fr 1fr" w="75%">
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <GridItem padding="10px">
              <TimeFrameRadioCard key={value} {...radio}>
                {value}
              </TimeFrameRadioCard>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}

export default TimeFrameRadio