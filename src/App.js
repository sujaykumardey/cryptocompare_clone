import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/layout/Home'
import Portfolio from './components/layout/Portfolio'
import Portfoliosignin from './components/layout/Portfoliosignin';

export default class App extends Component {
  render() {

    
    return (    
        <Provider store={store}>
          <Router>
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/portfolioauth" component={Portfoliosignin} />
            </Switch>
          </Router>
        </Provider>
    
    );
  }
}






