import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
