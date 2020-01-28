import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App/App.js';
import Dashboard from 'Dashboard/Dashboard.js';

ReactDOM.render(
  <div>
    <App/>
    <Dashboard/>
  </div>,
  document.querySelector('#root')
);