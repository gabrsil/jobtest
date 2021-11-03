import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './Styles/globalStyles'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
