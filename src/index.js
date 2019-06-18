import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import App from "./components/App";
import AppRoute from './components/AppRoute'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
  {/*  <App /> */}
  <AppRoute />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
