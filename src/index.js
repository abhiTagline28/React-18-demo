import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const container = document.getElementById('root');
// const container1 = document.getElementById('root1');

// // create a root
// const root = ReactDOM.createRoot(container);
// const root1 = ReactDOM.createRoot(container1);

// //render app to root
// root.render(<App />);
// root1.render(<App />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
