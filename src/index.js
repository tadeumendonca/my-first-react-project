import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import sum from './sum.js';

const title = 'React with Webpack and Babel with Hot Replacement';
sum(1,2);
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();