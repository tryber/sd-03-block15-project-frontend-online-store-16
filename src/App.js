import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import CartPage from './pages/CartPage.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shopping-cart" component={CartPage} />
      </Switch>
    </Router>
  );
}

export default App;
