import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <header className="header" style={{backgroundColor:"blue",padding:"16px"}}>
                <button>login/signup</button>
            </header>
         );
    }
}
 
export default Header;