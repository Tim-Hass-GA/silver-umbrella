import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
// lets the app load faster on subsequent visits...
import registerServiceWorker from './registerServiceWorker';

// create test element
// element, props, string
// const greeting = React.createElement('h1', {}, 'Hello World');

// test passing values
// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// }

// refactor with jsx
// react transpiles the content into react elements through babel...
// const greeting = <h1>Hello World - Current Date: { getCurrentDate() }</h1>

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
