import React, { Component } from 'react';
import './PortfolioCompo.css'

class PortfolioCompo extends Component {
    render() {
        return (
            <div className="container-body">
             <div className="container-portfolio" >
				<div className="header-portfolio">
					<h1 className="portfolios">
						<span className="fa fa-bar-chart"></span> MY PORTFOLIOS
					</h1>
				</div>
				<div className="container-emptyportfolio">
					<div className="emptyportfolio">
						<div className="emptyportfolio-body">
							<div className="emptyportfolio-image">
								<img className="demo-image" src="https://www.cryptocompare.com/media/350835/portfolio.png" alt="image" />
							</div>
							<div className="emptyportfolio-text">This is where it all started!</div>
							<div className="emptyportfolio-small">
								<p>At some point in the future when your grandkids visit you, you can either tell them:</p>
								<div className="empties">
									<div className="empty-item"><span className="emptyitem-number">1</span> You missed the boat on cryptocurrencies.</div>
									<div className="empty-item"><span className="emptyitem-number">2</span> You were an early adopter and made money out of trading cryptos!</div>
								</div>
								<div className="be-brave text-center">But, before you choose option <span className="emptyitem-number">2</span> and join the crypto world, you need to</div>
							</div>

                            <div className="emptyporfolio-footer">
							<button className="btn btn-warning" type="button" onClick={(e)=>this.props.openLogin(e)} >
								<i className="fa fa-sign-in ng-scope"></i> <b className="ng-scope">Login</b><span className="ng-scope"> or </span><b className="ng-scope">Register</b>
							</button>
							<p className="portfolio-caution">Never invest in cryptos more than you can afford to lose and always try to keep them in your own wallet!</p>
						</div>
						</div>
						
					</div>
				</div>
			

            </div>
            </div>
        );
    }
}



export default PortfolioCompo;