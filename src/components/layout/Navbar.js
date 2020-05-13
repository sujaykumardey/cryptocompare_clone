import React, { Component } from 'react';
import './modal.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTarget: null,
    };
  }
  componentDidMount() {
    console.log(this.state.modal);
  }
  handleModal = (e) => {
    this.setState({ dataTarget: '#modalRegisterForm' });
    console.log(this.state.dataTarget);
  };
  render() {
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
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Markets
                  </a>
                </li>
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
                <li className="btn btn-default nav-item">
                  <a href="#!" className="nav-link">
                    Portfolio{' '}
                  </a>
                </li>
                <li
                  className="btn btn-default nav-item"
                  onClick={(e) => this.handleModal(e)}
                  data-toggle="modal"
                  data-target={this.state.dataTarget}
                >
                  <a type="button" className="nav-link">
                    Log in /Sign Up{' '}
                  </a>
                </li>
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
                    data-dismiss="modal"
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
                      <div className="md-form form-sm mb-3">
                        <i className="fas fa-envelope prefix"></i>
                        <label
                          className="text"
                          data-error="wrong"
                          data-success="right"
                          for="modalLRInput10"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="modalLRInput10"
                          class="form-control form-control-sm validate"
                        />
                      </div>

                      <div class="md-form form-sm mb-4">
                        <i class="fas fa-lock prefix"></i>
                        <label
                          className="text"
                          data-error="wrong"
                          data-success="right"
                          for="modalLRInput11"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="modalLRInput11"
                          class="form-control form-control-sm validate"
                        />
                      </div>
                      <div class="text-center mt-2">
                        <button class="btn btn-success btn-block">
                          Log in <i class="fas fa-sign-in ml-1"></i>
                        </button>
                      </div>
                    </div>

                    <div class="modal-footer">
                      <div class="options text-center text-md-right mt-1">
                        <p>
                          Not a member?{' '}
                          <a href="#" class="blue-text">
                            Sign Up
                          </a>
                        </p>
                        <p>
                          Forgot{' '}
                          <a href="#" class="blue-text">
                            Password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="panel8" role="tabpanel">
                    <div class="modal-body">
                      <div class="md-form form-sm mb-3">
                        <i class="fas fa-envelope prefix"></i>
                        <label
                          className="text"
                          data-error="wrong"
                          data-success="right"
                          for="modalLRInput12"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="modalLRInput12"
                          class="form-control form-control-sm validate"
                        />
                      </div>

                      <div class="md-form form-sm mb-3  ">
                        <i class="fas fa-lock prefix"></i>
                        <label
                          className="text"
                          data-error="wrong"
                          data-success="right"
                          for="modalLRInput13"
                        >
                          Password
                        </label>
                        <input
                          className="text"
                          type="password"
                          id="modalLRInput13"
                          class="form-control form-control-sm validate"
                        />
                      </div>

                      <div class="md-form form-sm mb-4">
                        <i class="fas fa-lock prefix"></i>
                        <label
                          className="text"
                          data-error="wrong"
                          data-success="right"
                          for="modalLRInput14"
                        >
                          Repeat password
                        </label>
                        <input
                          type="password"
                          id="modalLRInput14"
                          class="form-control form-control-sm validate"
                        />
                      </div>

                      <div class="text-center form-sm mt-2">
                        <button class="btn btn-success btn-block">
                          Sign up <i class="fas fa-sign-in ml-1"></i>
                        </button>
                      </div>
                    </div>

                    <div class="modal-footer">
                      <div class="options text-right">
                        <p class="pt-1">
                          Already have an account?{' '}
                          <a href="#1" class="blue-text">
                            Log In
                          </a>
                        </p>
                      </div>
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
