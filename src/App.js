import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
/*
  about section - methodology, when last updated was
  refresh button somewhere
  use rune pictures next to runes
  apply theme throughout app
  resizing responsiveness
    https://www.chartjs.org/docs/latest/configuration/responsive.html

  features
    make chart smarter
    add some buffer to chart so points aren't at the min and max of chart
    select timeframes for charting
      will need to review how data is retrieved from db for this
    add skeleton for loading in / handle loading screen better

*/