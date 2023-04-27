import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Locations from './pages/Locations/Locations';
import Home from './pages/Home/Home';
import './App.scss';


function App() {
  const [startNum, setStartNum] = useState('+7')

  return (
    <Routes>
      <Route path='/' element={<Home startNum={startNum} />} />
      <Route path='/locations' element={<Locations setStartNum={setStartNum} />} />
    </Routes>
  );
}

export default App;
