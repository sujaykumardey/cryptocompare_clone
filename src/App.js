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
import bitcoinDsktp from "./images/bitcoin_english_dsktp.gif"
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="cointainer">
        <Router>
          <Header />
          <div className="bitcoin-img">
            <img src={bitcoinDsktp} alt="image"/>
          </div>     
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/coins/list/USD/1" component={CoinlistScreen}/>
          </Switch>
          </Router>
          <Footer/>
        </div>
      </Provider>
    );
  }
}






