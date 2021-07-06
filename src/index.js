import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import './assets/scss/component-style.scss';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';
import AuthenticationRoutes from "./routes/authenticationRoutes";

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthenticationRoutes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
