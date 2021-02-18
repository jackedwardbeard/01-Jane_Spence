import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';



// classes are stateful, functions are not
function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  )
}


export default App;
