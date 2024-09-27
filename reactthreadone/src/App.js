import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import HomePage from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<Header />} />
        <Route path="/login" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;