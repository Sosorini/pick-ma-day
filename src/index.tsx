import React from 'react';
import { render } from 'react-dom';

import App from 'layouts/App/index';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './layouts/App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
