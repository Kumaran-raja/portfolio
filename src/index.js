import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home';
import Header from './components/header';
import Skills from './components/skills';
import Certificates from './components/certificates';
import Contact from './components/contact';
import Projects from './components/projects';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/" element={<Home />}/>
      <Route path="/certificates" element={<Certificates />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </Router>
);
reportWebVitals();