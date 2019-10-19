import React from 'react';
import '../css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Nav from './Nav'
import Routers from '../router/Routers';
import Footer from './Footer'

function App() {
  return (
    <Router>
      <div >
      <Nav></Nav>
      <Routers></Routers>
      <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
