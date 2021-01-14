import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import { Routes } from './routes';
import { NavBar } from './Components/index';

ReactDOM.render(

  <Router>
  <NavBar />
    <Routes />
  </Router>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  document.getElementById('root'),
);

