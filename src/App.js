import React, { Component } from 'react';
import Homepage from './screen/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
import store from "./store"
import {Provider} from "react-redux"
import Header from "./components/Header"
import "./App.css"
import Footer from './components/Footer'
import CoinlistScreen from './screen/CoinlistScreen';
import CoinDetailsScreen from './screen/coinDetailsScreen'


export default class App extends Component {
  render () {
    return (

      <Provider store={store}>
        <div className="cointainer">
        <Router>
          <Header />    
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/coins/list/USD/1" component={CoinlistScreen}/>
            <Route path="/coins/list/coinsDetails" component={CoinDetailsScreen}/>
          </Switch>
          </Router>
          <Footer/>
        </div>
      </Provider>
    );
}
}
