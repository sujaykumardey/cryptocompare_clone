import React, { Component } from 'react';
import './footer.css';
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer ng-scope" ng-controller="ContactUsFooterCtrl">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-3 col-xs-6 col-footer">
                <div className="nav-panel">
                  <div className="nav-header-all">
                    <h4>Our company</h4>
                  </div>
                  <ul className="nav nav-pills">
                    <li role="presentation" className="footer-text">
                      <a href="/about-us/">About us</a>
                    </li>
                    <li role="presentation" className="footer-text">
                      <a href="/press-release/">Press Releases</a>
                    </li>
                    <li role="presentation" className="footer-text">
                      <a href="https://blog.cryptocompare.com/" target="#1">
                        Research
                      </a>
                    </li>
                    <li role="presentation" className="footer-text">
                      <a href="/about-us/timeline/">Our Timeline</a>
                    </li>
                    <li role="presentation">
                      <a href="/privacy-policy/">Privacy policy</a>
                    </li>
                    <li role="presentation">
                      <a href="/terms-conditions/">Terms &amp; Conditions</a>
                    </li>
                    <li role="presentation">
                      <a href="/website-disclaimer/">Website disclaimer</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 col-sm-3 col-xs-6 col-footer panel-min-height">
                <div className="nav-panel">
                  <div className="nav-header-all">
                    <h4>Marketing</h4>
                  </div>
                  <ul className="nav nav-pills">
                    <li role="presentation">
                      <a href="https://www.cryptocompare.com/media/35280519/cc-public-guidelines.pdf">
                        Branding guidelines
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="/advertise/">Advertise with us</a>
                    </li>
                    <li role="presentation" className="footer-text">
                      <a href="/email-updates/daily/2020/may/13/">
                        Latest Newsletter
                      </a>
                    </li>
                    <li role="presentation" className="footer-text">
                      <a href="/api/external/newsletter/">Newsletter RSS</a>
                    </li>
                    <li role="presentation" className="footer-text">
                      <a
                        href="https://drive.google.com/open?id=0B3isfML9O09eMHQ2dGFPOHBSYlU"
                        target="#1"
                      >
                        Submit Content
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 col-sm-3 col-xs-6 col-footer">
                <div className="nav-panel">
                  <div className="nav-header-all">
                    <h4>Developers</h4>
                  </div>
                  <ul className="nav nav-pills">
                    <li role="presentation">
                      <a href="/dev/widget/wizard/">
                        <i className="fa fa-space-shuttle"></i> Widgets
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="https://min-api.cryptocompare.com">
                        <i className="fa fa-code"></i> API
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#1"
                        ng-click="switchLights()"
                        className="ng-binding"
                      >
                        <i className="fa fa-lightbulb-o"></i> Turn Lights Off
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        target="#1"
                        href="https://www.cryptocompare.com/full-screen/conference?fsyms=BTC,ETH,BCH&amp;tsym=USD&amp;eventLogo=https://www.cryptocompare.com/media/30001628/your-logo.png"
                      >
                        <i className="fa fa-desktop"></i> Conference Screen
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        target="#1"
                        href="https://www.cryptocompare.com/media/25792605/topcoinsticker-v3.html"
                      >
                        <i className="fa fa-ticket"></i> Conference Ticker
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 col-sm-3 col-xs-6 col-footer">
                <div className="nav-panel">
                  <div className="nav-header-all">
                    <h4>Get in touch</h4>
                  </div>
                  <ul className="nav nav-pills ng-scope">
                    <li role="presentation" className="footer-text">
                      <a href="/careers/">Careers</a>
                    </li>
                    <li role="presentation">
                      <a
                        href="https://cryptocompare.zendesk.com/hc/en-gb/requests/new"
                        target="#1"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="https://cryptocompare.zendesk.com/hc/en-gb"
                        target="#1"
                      >
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-12 col-xs-12"
                style={{ marginTop: '0px' }}
              >
                <div className="nav-header-all text-center">
                  <h4>Get the CryptoCompare App</h4>
                </div>
                <div
                  className="row row-app"
                  style={{ marginTop: '15px', marginBottom: '30px' }}
                >
                  <div className="col-md-6 text-right">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.cryptocompare.mainapp"
                      target="#1"
                    >
                      <img
                        src="https://www.cryptocompare.com/media/34835915/playstore.png"
                        style={{ width: '140px' }}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="https://itunes.apple.com/us/app/cryptocompare/id1248404900?ls=1&amp;mt=8"
                      target="#1"
                    >
                      <img
                        src="https://www.cryptocompare.com/media/34835914/appstore.png"
                        style={{ height: '50px' }}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <ul className="soc d-flex justify-content-around">
                  <li>
                    <a
                      className="fa fa-twitter icon-footer"
                      href="https://twitter.com/CryptoCompare"
                      target="#1"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="fa fa-facebook icon-footer"
                      href="https://www.facebook.com/cryptocompare"
                      target="#1"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="fa fa-medium icon-footer"
                      href="https://blog.cryptocompare.com/"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
                <div className="nav-panel clearfix">
                  <ul className="nav nav-pills nav-centered nav-made d-flex justify-content-center">
                    <li role="presentation">
                      <a href="https://www.cryptocompare.com/media/35280519/cc-public-guidelines.pdf">
                        © 2020 Crypto Coin Comparison Ltd
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="/about-us/">
                        Made with <i className="fa fa-heart love"></i> in London
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
