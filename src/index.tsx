import React from 'react';
import { render } from 'react-dom';

import App from 'layouts/App/index';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
// import App from './layouts/App';

render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
