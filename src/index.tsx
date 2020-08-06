import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactGA.initialize('UA-21405172-6');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
