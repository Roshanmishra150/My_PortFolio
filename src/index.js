import React from 'react';
import {BrowserRouter} from "react-router-dom";
import reactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import App from './App';
// import UserProfileForm from './Email' 
import reportWebVitals from './reportWebVitals';

reactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <UserProfileForm/> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
