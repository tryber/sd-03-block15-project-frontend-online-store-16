import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CartPage from './pages/CartPage/CartPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shopping-cart" component={CartPage} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
