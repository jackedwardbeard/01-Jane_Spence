import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import Landing from './components/Landing';



// classes are stateful, functions are not
function App() {
  return (
    <Router>
      <Home/>
      <Landing/>
    </Router>
  )
}


export default App;
