import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './footer'

class Home extends Component {
    render() {
        return (
            <>
            <Navbar />
            <div className="container" style={{height:"50vh"}}> TEAM DENVER </div>
            
            <Footer/>     
            </>
        );
    }
}



export default Home;