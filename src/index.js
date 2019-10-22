import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'React with Webpack and Babel with Hot Replacement';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();