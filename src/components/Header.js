import React, { Component } from 'react';
import{Link} from "react-router-dom"
class Header extends Component {
    render() { 
        return ( 
            <header className="header">
                <ul className="header-nav-bar">
                    <Link to="/"><li className="nav-list">Market</li></Link>
                    <Link to="/coins/list/USD/1"><li className="nav-list">Coin List</li></Link>
                    
                </ul>
                
            </header>
         );
    }
}
 
export default Header;