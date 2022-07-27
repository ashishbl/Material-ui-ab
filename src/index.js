import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Authentication from './pages/Authentication/Authentication';
import User from './pages/User/User';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path='authentication' element={<Authentication />} />
    <Route path='user' element={<User/>}/>
  </Routes>
</BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
