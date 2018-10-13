import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./store";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
