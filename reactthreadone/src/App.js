import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import HomePage from './components/Home';
import Registro from './components/Registro';

function App() {
  return (
    <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/registro" element={<Registro />} />
                </Routes>
            
        </Router>
    
  );
}

export default App;