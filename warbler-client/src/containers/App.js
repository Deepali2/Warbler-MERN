import React, {Component} from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";

const store = configureStore();

const App = () => (
  //The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function
  <Provider store={store}>
    <Router>
      <div>Hello World!</div>
    </Router>
  </Provider>
)

export default App;
