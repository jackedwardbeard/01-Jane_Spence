import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat|Open+Sans');
`

// classes are stateful, functions are not (without hooks)
function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Home/>
    </Router>
    </>
  )
}


export default App;
