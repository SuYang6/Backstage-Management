import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Admin from "./pages/admin/Admin";
import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux";

import Router from "./pages/routers/";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Router />, document.getElementById("root"));
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
