import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'


function App() {
  return (<Home />);
}

export default App;
/*
  use rune pictures next to runes
  resizing responsiveness
    https://www.chartjs.org/docs/latest/configuration/responsive.html

  features
    select timeframes for charting
      will need to review how data is retrieved from db for this
    add skeleton for loading in / handle loading screen better

*/