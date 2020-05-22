import React, { Component } from 'react';
import Homepage from './screen/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
import store from "./store"
import {Provider} from "react-redux"
import Header from "./components/layout/Navbar"
import "./App.css"
import Footer from './components/layout/footer'
import CoinlistScreen from './screen/CoinlistScreen';
import CoinDetailsScreen from './screen/coinDetailsScreen'
// import Home from './components/layout/Home'
import Portfolio from './components/layout/Portfolio'
import Portfoliosignin from './components/layout/Portfoliosignin';
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
            <Route path="/coins/:name/overview/USD" component={CoinDetailsScreen}/>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/portfolioauth" component={Portfoliosignin} />
          </Switch>
          </Router>
          <Footer/>
        </div>
      </Provider>
    );
}
}
