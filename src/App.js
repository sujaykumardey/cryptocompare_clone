import React, { Component } from 'react';
import HomePage from './screen/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
import store from "./store"
import {Provider} from "react-redux"
import Header from "./components/Header"
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}






