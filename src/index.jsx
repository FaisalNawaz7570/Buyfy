import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, {persistor} from "./Redux/store";
import myhistory from "./myhistory/myhistory";
import ModalManager from "./Components/ModalManager/ModalManager";
import { PersistGate } from "redux-persist/integration/react";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router history={myhistory}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ModalManager />
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
