import React from 'react';
import ReactDOM from 'react-dom/client';

const $element = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const container = document.querySelector('#root');

ReactDOM.createRoot(container).render($element);
