import "./App.css";
import { Route, Switch } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import Authentication from "./Pages/Authentication/Authentication";
// import Category from "./Pages/Category/Category";
// import CategoryProduct from "./Pages/CategoryProducts/CategoryProducts";
// import Checkout from "./Pages/Checkout/Checkout";
import { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { firebaseAuthListener } from "./Redux/auth/authActions";
import Navbar from "./Components/Navbar/Navbar";
// import Test from "./Pages/Test/Test";
// import Product from "./Pages/Product/Product";

var Home = lazy(() => import("./Pages/Home/Home"));
var Authentication = lazy(() =>
  import("./Pages/Authentication/Authentication")
);
var Category = lazy(() => import("./Pages/Category/Category"));
var CategoryProduct = lazy(() =>
  import("./Pages/CategoryProducts/CategoryProducts")
);
var Product = lazy(() => import("./Pages/Product/Product"));
var Test = lazy(() => import("./Pages/Test/Test"));
var Checkout = lazy(() => import("./Pages/Checkout/Checkout"));

function App({ firebaseAuthListener }) {
  useEffect(() => {
    // CDM
    firebaseAuthListener();
  }, [firebaseAuthListener]);
  return (
    <div>
      <Navbar />
      <Switch>
        <div className="pagesContainer">
          <Suspense fallback={<div>loading...</div>}>
            <Route path="/" component={Home} exact />
            <Route path="/authentication" component={Authentication} exact />
            <Route path="/category" component={Category} exact />
            <Route
              path="/category-products/:category"
              component={CategoryProduct}
              exact
            />
            <Route path="/product/:productId" component={Product} exact />
            <Route path="/checkout/:orderId" component={Checkout} exact />
            <Route path="/test" component={Test} />
          </Suspense>
        </div>
      </Switch>
    </div>
  );
}

var actions = {
  firebaseAuthListener,
};

export default connect(null, actions)(App);
