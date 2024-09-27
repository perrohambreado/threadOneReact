import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import HomePage from './components/Home';

function App() {
  return (
    <div className='Tode'>
      <Header/>
      <HomePage/>
    </div>
    
  );
}

export default App;