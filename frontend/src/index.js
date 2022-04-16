import React from 'react';
import ReactDOM from 'react-dom';
//import * as ReactDOMClient from 'react-dom/client';

import './index.css';
import Admin from './Admin';
import reportWebVitals from './reportWebVitals';

import App from './App';

//const container = document.getElementById('root');

// Create a root.
//const root = ReactDOMClient.createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Admin />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    
    <Admin />

  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
