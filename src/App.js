import React from 'react';
// import {BrowserRouter as Router, Route, Link}  from 'react-router-dom';

import Footer from './components/Footer.js';
// import Header from './components/Header.js';
import AppRouter from './Router.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
