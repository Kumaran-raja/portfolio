import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </Router>
);

reportWebVitals();
