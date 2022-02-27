import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Day from 'pages/Day';

function App() {
  return (
    <div>
      <h1>as;oidfja;lskdjf;</h1>
      <Routes>
        <Route path="/" element={<Day />} />
      </Routes>
    </div>
  );
}

export default App;
