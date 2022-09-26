import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { apiMiddleware } from "redux-api-middleware";
import reducer from "./reducers";
import App from "./containers/App";

const store = createStore(reducer, applyMiddleware(apiMiddleware));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
