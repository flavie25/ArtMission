import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Warning from 'pages/Warning';
import Question1 from '../pages/Question1/Question1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/warning" element={<Warning/>} />
        <Route exact path="/question1" element={<Question1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
