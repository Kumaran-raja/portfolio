import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Header from './components/Header';
import Certificates from './components/Certificate'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contact'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/certificates" element={<Certificates />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contacts" element={<Contacts />}/>
    </Routes>
  </Router>
);
reportWebVitals();