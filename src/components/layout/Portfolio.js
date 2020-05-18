import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import Navbar from './Navbar';
import PortfolioCompo from './PortfolioCompo';
import Footer from './footer';

class Portfolio extends Component {
    componentWillMount(){
    }
    render() {
        if(this.props.tokens !== undefined) return (<Redirect to='/portfolioauth' />);
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