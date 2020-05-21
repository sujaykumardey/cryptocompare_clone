import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Portfoliosignin.css';
import NavbarCompo from './Navbarcompo';
import Totalrevenue from './Totalrevenue';
import Footer from './footer';
import Coincards from './coincards';
import { addCoinWallet } from '../../actions/postActions';
import { Redirect } from 'react-router-dom';

class Portfoliosignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: null,
      price: null,
      token: null,
      username: null,
      result: null,
      coinprice: null,
    };
  }

  handleCoin = (e) => {
    e.preventDefault();
    const data = {
      coin: this.state.coin,
      price: this.state.price,
    };
    this.props.addCoinWallet(data, this.props.token);
  };

  componentWillMount() {}

  // componentDidMount() {
  //   this.setState({ coinprice: this.props.coin_price });
  // }

  render() {
    if (this.state.token === undefined) return <Redirect to="/" />;
    return (
      <div className="main-container">
        <NavbarCompo name={this.props.name} />
        <div className="container-body">
          <div className="container-portfolio">
            <div className="header-portfolio">
              <h1 className="portfolios">
                <span className="fa fa-bar-chart"></span> MY PORTFOLIOS
              </h1>
            </div>
            <div className="header-portfolio-user">
              <h1 className="portfolios-user">
                {this.props.name}
                <span className="fa fa-lock"></span>
              </h1>
            </div>

            <div className="header-portfolio-add-coin d-flex justify-content-md-between">
              <h1 className="portfolios-user-add-coin d-flex">
                Portfolio Currency
                <span className="dropdown">
                  <a
                    href="as"
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    USD
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                  >
                    <button className="dropdown-item" type="button">
                      USD
                    </button>
                    <button className="dropdown-item" type="button">
                      EUR
                    </button>
                    <button className="dropdown-item" type="button">
                      GBP
                    </button>
                  </div>
                </span>
              </h1>
              <div className="add-coin">
                <button
                  className="btn btn-warning add-coin-btn"
                  data-toggle="modal"
                  data-target="#orangeModalSubscription"
                >
                  <span className="fa fa-plus" />
                  Coin
                </button>
              </div>
            </div>

            <Totalrevenue result={this.state.result} />

            <Coincards
              coin={this.props.coin}
              price={this.state.coin_price}
              token={this.props.token}
            />
            <div className="button-coin-end d-flex justify-content-end">
              <div className="add-coin">
                <button
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#orangeModalSubscription"
                >
                  <span className="fa fa-plus" />
                  Coin
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="orangeModalSubscription"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-notify modal-warning"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title white-text w-100 font-weight-bold py-2">
                  Add new coin to portfolio
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" className="white-text">
                    &times;
                  </span>
                </button>
              </div>

              <div className="modal-body modal-portfolio">
                <div className="md-form mb-5">
                  <i className="fa fa-wallet prefix white-text"></i>
                  <input
                    type="text"
                    id="modalLRInput10"
                    value={this.state.coin}
                    onChange={(e) => this.setState({ coin: e.target.value })}
                    className="form-control validate"
                    autoComplete="off"
                    required
                  />
                  <label
                    className="text"
                    data-error="wrong"
                    data-success="right"
                    for="form3"
                  >
                    <span className="content-name">Coin</span>
                  </label>
                </div>
                <div className="md-form">
                  <i className="fas fa-dollar-sign prefix white-text"></i>
                  <input
                    type="text"
                    id="modalLRInput10"
                    value={this.state.price}
                    onChange={(e) => this.setState({ price: e.target.value })}
                    className="form-control validate"
                    autoComplete="off"
                    required
                  />
                  <label
                    className="text"
                    data-error="wrong"
                    data-success="right"
                    for="form2"
                  >
                    <span className="content-name">Amount</span>
                  </label>
                </div>
              </div>

              <div className="modal-footer justify-content-center">
                <a
                  href="sd"
                  type="button"
                  className="btn btn-outline-warning waves-effect"
                  onClick={(e) => this.handleCoin(e)}
                >
                  ADD TO PORTFOLIOS<i className="fas fa-paper-plane-o ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coin: state.crypto.users.coins,
  name: state.crypto.users.name,
  token: state.crypto.users.token,
});

export default connect(mapStateToProps, {
  addCoinWallet,
})(Portfoliosignin);
