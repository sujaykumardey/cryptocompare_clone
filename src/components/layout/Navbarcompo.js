import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import { Logout } from '../../actions/postActions';
import './Navcompo.css'
class NavbarCompo extends Component {
  constructor(props){
    super(props);
    this.state={
      user:null,
    }
  }
  componentDidMount(){
    this.setState({user:this.props.name})  
    
  }

  handleLogout=(e)=>{
    this.props.Logout();
    

    }
  
  render() {
    
    
    return (
             <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
                role="navigation"
              >
                <div className="container">
                  <img src="./logo-bold.svg" width="300" height="50" alt="" />
      
                  <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-toggle="collapse"
                    
                  >
                    &#9776;
                  </button>
                  <div className="collapse navbar-collapse" id="exCollapsingNavbar">
                    <ul className="nav navbar-nav">
                      <Link to="/">
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Markets
                          </a>
                        </li>
                      </Link>
                      <li className="nav-item">
                        <a href="#!" className="nav-link">
                          Data
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link">
                          API
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link">
                          Submits
                        </a>
                      </li>
                    </ul>
                    <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                      <Link to="/portfolioauth">
                        <li className="btn btn-default nav-item">
                          <a href="#!" className="nav-link">
                            Portfolio{' '}
                          </a>
                        </li>
                        </Link>
                      {this.state.user===undefined? 
                       null:
                      <li
                        className="btn btn-default nav-item"                                       
                      >

                        <Link to="/" type="button" onClick={(e)=>this.handleLogout(e)} className="nav-link">
                         <img src="https://images.cryptocompare.com/default-user/default-user.png" className="user-icon"/> Log out {' '}
                        </Link>
                        
                      </li>
                     
                      }
                    </ul>
                  </div>
                </div>
              </nav>
      
    );
  }
}
const mapStateToProps = (state) => ({
  store: state.crypto
});

export default connect(mapStateToProps, {
  Logout,
})(NavbarCompo);
