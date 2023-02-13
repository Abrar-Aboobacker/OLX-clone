import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'

function App() {
  return (
    <div>
      <Router>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/signup'>
      <Signup/>
      </Route>
      <Route path='/login'>
      <Login/>
      </Route>  
      </Router>
    </div>
  );
}

export default App;
