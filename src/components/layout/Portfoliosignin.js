import React, { Component } from 'react';
import './Portfoliosignin.css';
import Navbar from './Navbar';
import Footer from './footer';
class Portfoliosignin extends Component {
  render() {
    return (
      <>
      <Navbar />
        <div className="container-body">
          <div className="advertise">
            <img
              src="https://www.cryptocompare.com/media/36935012/bitcoin_english_dsktp.gif"
              width="700"
              height="90"
              alt="adv"
            />
          </div>

          <div className="container-portfolio">
            <div className="header-portfolio">
              <h1 className="portfolios">
                <span className="fa fa-bar-chart"></span> MY PORTFOLIOS
              </h1>
            </div>
            <div className="header-portfolio-user">
              <h1 className="portfolios-user">
                Joy<span className="fa fa-lock"></span>
              </h1>
            </div>

            <div className="header-portfolio-add-coin d-flex justify-content-md-between">
              <h1 className="portfolios-user-add-coin d-flex">
                Portfolio Currency
                <span className="dropdown">
                  <a
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
                <button className="btn btn-warning add-coin-btn">
                  <span className="fa fa-plus" />
                  Coin
                </button>
              </div>
            </div>
            <div className="cardlist d-flex justify-content-end">
              <div
                class="card border-dark mb-0"
                style={{ width: '10rem', maxHeight: '7rem' }}
              >
                <div class="card-header">Acquisition Cost</div>
                <div class="card-body text-dark">
                  <h7 class="card-body">Dark card title</h7>
                  <p class="card-text"></p>
                </div>
              </div>

              <div
                class="card border-dark mb-0"
                style={{ width: '9rem', maxHeight: '7rem' }}
              >
                <div class="card-header">Realized P/L</div>
                <div class="card-body text-dark">
                  <h7 class="card-body">Dark card title</h7>
                  <p class="card-text"></p>
                </div>
              </div>

              <div
                class="card border-dark mb-0"
                style={{ width: '12rem', maxHeight: '7rem' }}
              >
                <div class="card-header">Profit / Loss</div>
                <div class="card-body text-dark">
                  <h7 class="card-body">Dark card title</h7>
                  <p class="card-text"></p>
                </div>
              </div>

              <div
                class="card border-dark mb-0"
                style={{ width: '7rem', maxHeight: '7rem' }}
              >
                <div class="card-header">Holdings</div>
                <div class="card-body text-dark">
                  <h7 class="card-body">Dark card title</h7>
                  <p class="card-text"></p>
                </div>
              </div>

              <div class="card border-dark mb-0" style={{ width: '12rem' }}>
                <div class="card-header">24H Profit / Loss</div>
                <div class="card-body text-dark">
                  <h7 class="card-body">Dark card title</h7>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>

            <div className="table-container">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col"># Coin/Date</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total Value</th>
                    <th scope="col">Profit/Loss</th>
                    <th scope="col">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Bitcoin (BTC)</th>
                    <td>$ 9,517.81 7.20%1 @ $ 1.000</td>
                    <td>$ 9,517.81</td>
                    <td>$ 9,516.81</td>
                    <td>951,681.00%</td>

                  </tr>
                </tbody>
              </table>
            </div>
        <div className="button-coin-end d-flex justify-content-end">
            <div className="add-coin">
                <button className="btn btn-warning">
                  <span className="fa fa-plus" />
                  Coin
                </button>
              </div>

         </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Portfoliosignin;
