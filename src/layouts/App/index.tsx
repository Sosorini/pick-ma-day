import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Day from 'pages/Day';

const App: FC = () => (
  <>
    <h1>as;oidfja;lskdjf;</h1>
    <Routes>
      <Route path="/" element={<Day />} />
    </Routes>
  </>
);

export default App;
