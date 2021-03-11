import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import Category from './Pages/Category/Category';
import CategoryProduct from "./Pages/CategoryProducts/CategoryProducts";
import Checkout from './Pages/Checkout/Checkout';
import { useEffect } from "react";
import { connect } from 'react-redux';
import { firebaseAuthListener } from './Redux/auth/authActions';

function App({firebaseAuthListener}) {
  useEffect(() => {
// CDM
  firebaseAuthListener()
  },[firebaseAuthListener])
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/authentication" component={Authentication} exact />
        <Route path="/category" component={Category} exact />
        <Route path="/category-products" component={CategoryProduct} exact />
        <Route path="/checkout" component={Checkout} exact />
      </Switch>
    </div>
  );
}

var actions = {
  firebaseAuthListener
}

export default connect(null,actions)(App);
