import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";

const store = configureStore();

const App = () => (
  //The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
      </div>
    </Router>
  </Provider>
)

export default App;
