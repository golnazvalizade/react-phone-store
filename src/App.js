import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
};

export default App;
