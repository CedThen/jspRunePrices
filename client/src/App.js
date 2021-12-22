import React from 'react'
import Home from './components/Home'
import { useMediaQuery } from 'react-responsive'
import ResponsiveContext from './components/ResponsiveContext'

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' }) ? 'mobile' : 'default'
  return (
    <ResponsiveContext.Provider value={isMobile}>
      <Home />
    </ResponsiveContext.Provider>);
}

export default App;
/*
  use rune pictures next to runes
  resizing responsiveness
    https://www.chartjs.org/docs/latest/configuration/responsive.html
*/