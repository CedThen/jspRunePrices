import React from 'react'
import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
const Header = () => {
  const navigate = useNavigate()
  return (
    <Box position="fixed" top="10" right="10" color="brand.white" onClick={() => navigate('/about')}> Hello</Box>
  )
}

export default Header