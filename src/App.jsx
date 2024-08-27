import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed Router from imports
import Home from './pages/Home';
import ChatBox from './pages/ChatBox';
import About from './pages/About';
import Overview from './pages/Overview';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ChatBox" element={<ChatBox />} />
      <Route path="/about" element={<About />} />
      <Route path="/Overview" element={<Overview />} />
    </Routes>
  );
}

export default App;
