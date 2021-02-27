import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';


// classes are stateful, functions are not (without hooks)
class App extends Component {
  render() {
    return (
      <Router>
        <Home/>
      </Router>
    )
  }
}


export default App;
