import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = `My environment is ${process.env.NODE_ENV}.`;
console.log(process.env.NODE_ENV);
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();