import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css'
import {
  userResistration,userLogin
} from '../../actions/postActions';

import './modal.css';




class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:null,
      dataTarget: null,
      name: '',
      email: '',
      password: '',
      token:this.props.tokens
    };
  }
  
componentDidMount(){
  if(this.props.tokens !==undefined)
  {
    this.setState({modal:'modal'})
  }
}


handleLogin=(e)=>{
  
  e.preventDefault();
  const data = {
    email:this.state.email,
    password:this.state.password, 
  };
  this.props.userLogin(data);
  this.setState({modal:'modal'});
  this.setState({name:'',email:'',password:''})

}




handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    name:this.state.name,
    email:this.state.email,
    password:this.state.password, 
  };
  this.props.userResistration(data);
  this.setState({modal:'modal'});
  
  this.setState({name:null,email:null,password:null})
  
  
  
};

handleClose=(e)=>{
  e.preventDefault();
  console.log(this.state.modal) 
  this.setState({modal:'modal'});
  console.log(this.state.modal)
   
  
}




handleModal = (e) => {
    this.setState({ dataTarget: '#modalRegisterForm' });
  };
  render() {
    
    
    
    if(this.props.tokens !== undefined) return (<Redirect to='/portfolioauth' />);

    
    return (
      <>
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
              data-target="#exCollapsingNavbar"
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
                <Link to="/portfolio">
                  <li className="btn btn-default nav-item">
                    <a href="#!" className="nav-link">
                      Portfolio{' '}
                    </a>
                  </li>
                  </Link>
                {this.props.name===undefined ? 
                 <li
                 className="btn btn-default nav-item"
                 onClick={(e) => this.handleModal(e)}
                 data-toggle="modal"
                 data-target={this.state.dataTarget}
               >
                 <a type="button" className="nav-link">
                 Log in /Sign Up{' '}
                 </a>
               </li>:
                <li
                  className="btn btn-default nav-item"
                  onClick={(e) => this.handleModal(e)}
                  data-toggle="modal"
                  data-target={this.state.dataTarget}
                >
                  <a type="button" className="nav-link">
                    Sign out {' '}
                  </a>
                </li>
               
                }
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="modal fade rounded"
          id="modalRegisterForm"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">
              <div className="modal-c-tabs">
                <ul
                  className="nav nav-tabs bg-success md-tabs tabs-2 light-blue darken-3"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#panel7"
                      role="tab"
                    >
                      <i className="fas fa-user mr-1"></i>
                      Login
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#panel8"
                      role="tab"
                    >
                      <i className="fas fa-user-plus mr-1"></i>
                      Register
                    </a>
                  </li>
                  <button
                    type="button"
                    className="btn btn-outline-info waves-effect ml-auto"
                    data-dismiss={this.state.modal}
                    onClick={(e)=>this.handleClose(e)}
                    
                  >
                    &times;
                  </button>
                </ul>

                <div className="tab-content">
                  <div
                    className="tab-pane fade in show active"
                    id="panel7"
                    role="tabpanel"
                  >
                    <div className="modal-body mb-1">
                      <div class="md-form form-sm mb-3">
                        <i className="fas fa-envelope prefix"></i>
                        <input
                          type="email"
                          id="modalLRInput10"
                          value={this.state.email}
                          autoComplete="off"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })}
                          className="form-control form-control-sm validate"
                          required
                        />
                        <label
                          className="text"
                          data-error="wrong"
                          data-success="right"
                          for="modalLRInput11"
                        >
                          <span class="content-name" > 
                          Email</span>
                        </label>
                      </div>
                        
                      <div class="md-form form-sm mb-4">
                        <i className="fas fa-lock prefix"></i>
                        <input
                          type="password"
                          id="modalLRInput10"
                          autoComplete="off"
                          value={this.state.password}
                          onChange={(e) =>
                            this.setState({ password: e.target.value })}
                          className="form-control form-control-sm validate"
                          required
                        />
                        <label
                          className="text"
                          data-error="wrong"
                          data-success="right"
                          for="modalLRInput11"
                        ><span class="content-name" > 
                          Password</span>
                        </label>
                      </div>

                      <div className="text-center mt-2">
                       
                          <button
                          className="btn-login btn-success btn-block login waves-effect"
                          onClick={(e)=>this.handleLogin(e)}
                          data-dismiss='modal'

                        >
                          Log in <i className="fas fa-sign-in ml-1"></i>
                        </button>
                      </div>
                    </div>

                    <div class="row my-3 d-flex justify-content-sm-around">
                        <button type="button" id="icon-button1"><i className="fab fa-facebook-f text-center"></i></button>
                        <button type="button" id="icon-button2"><i className="fab fa-twitter"></i></button>
                        <button type="button" id="icon-button3"><i className="fab fa-google-plus-g"></i></button>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="panel8" role="tabpanel">
                    <div className="modal-body">
                      <div className="md-form form-sm mb-3">
                        <i className="fas fa-envelope prefix"></i>
                        <input
                          type="email"
                          value={this.state.name}
                          onChange={(e) =>
                            this.setState({ name: e.target.value })
                          }
                          autoComplete="off"
                          id="modalLRInput10"
                          className="form-control form-control-sm validate"
                          required
                        />
                        <label className="text" for="modalLRInput12">
                        <span class="content-name" > 
                          Name</span>
                        </label>
                      </div>

                      <div className="md-form form-sm mb-3  ">
                        <i className="fas fa-lock prefix"></i>
                        <input
                          className="text"
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                          type="email"
                          id="modalLRInput10"
                          class="form-control form-control-sm validate"
                          autoComplete="off"
                          required
                        />
                        <label
                          className="text"
                          data-error="wrong"
                          data-success="right"
                          for="modalLRInput10"
                        > <span class="content-name" > 
                        Email</span>
                          
                        </label>

                      </div>

                      <div class="md-form form-sm mb-4">
                        <i class="fas fa-lock prefix"></i>
                         
                        
                        <input
                          type="password"
                          value={this.state.password}
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                          id="modalLRInput10"
                          class="form-control form-control-sm validate"
                          autoComplete="off"
                          required
                        />
                        <label
                          className="text"
                          data-error="wrong"
                          data-success="right"
                          for="modalLRInput14"
                        ><span class="content-name" > 
                         Password</span>
                          </label>
                      </div>

                      <div class="text-center form-sm mt-2">
                        <button
                          class="btn-signup btn-block waves-effect"
                          data-dismiss='modal'
                          onClick={(e) => this.handleSubmit(e)}
                          
                        >
                          Sign up <i class="fas fa-sign-in ml-1"></i>
                        </button>
                      </div>
                    </div>

                    <div class="row my-3 d-flex justify-content-sm-around">
                        <button type="button" id="icon-button1"><i className="fab fa-facebook-f text-center"></i></button>
                        <button type="button" id="icon-button2"><i className="fab fa-twitter"></i></button>
                        <button type="button" id="icon-button3"><i className="fab fa-google-plus-g"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tokens: state.crypto.users.token,
});


export default connect(mapStateToProps,{
  userResistration,userLogin
})(Navbar);
