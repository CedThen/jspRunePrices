import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from './components/Fonts'
import theme from './themes/index.js'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  about section - methodology, when last updated was
  refresh button somewhere
  use rune pictures next to runes

*/