import React, { Component } from 'react';
import Navbar from './Navbar';
import PortfolioCompo from './PortfolioCompo';
import Footer from './footer';

class Portfolio extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <PortfolioCompo />
            <Footer/> 
            </div>
        );
    }
}



export default Portfolio;