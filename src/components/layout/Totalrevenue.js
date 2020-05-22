import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bitCoinPrice } from '../../actions/postActions';
import { Redirect } from 'react-router-dom';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { api_websocket } from '../../assets/credentials';
const client = new W3CWebSocket(
  `wss://streamer.cryptocompare.com/v2?api_key=${api_websocket}`
);

class Totalrevenue extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      result: null,
      coinprice: null,
    };
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    this.setState({ coinprice: this.props.coin_price });
    console.log('connecting.....');
    this.setState({ username: this.props.name });
    client.onopen = () => {
      var subRequest = {
        action: 'SubAdd',
        subs: ['5~CCCAGG~BTC~USD'],
      };

      client.send(JSON.stringify(subRequest));

      client.onmessage = (event) => {
        let message = JSON.parse(event.data);
        console.log(message);
        this.setState((prevState) => {
          if (message.PRICE === undefined) {
            this.setState({ coinprice: prevState.coinprice });
            this.props.bitCoinPrice(this.state.coinprice);
          } else {
            this.setState({ coinprice: message.PRICE });
            this.props.bitCoinPrice(this.state.coinprice);
          }
        });
      };

      
    };

    
  }

  render() {
    return (
      <div className="cardlist d-flex justify-content-end">
        <div
          class="card border-dark mb-0"
          style={{ width: '10rem', maxHeight: '7rem' }}
        >
          <div class="card-header">Total</div>
          <div class="card-body text-dark">
            <h7 class="card-body">{this.props.result}$</h7>
            <p class="card-text"></p>
          </div>
        </div>

        <div
          class="card border-dark mb-0"
          style={{ width: '9rem', maxHeight: '7rem' }}
        >
          <div class="card-header">Realized P/L</div>
          <div class="card-body text-dark">
            <h7 class="card-body">{this.props.coin}</h7>
            <p class="card-text"></p>
          </div>
        </div>

        <div
          class="card border-dark mb-0"
          style={{ width: '12rem', maxHeight: '7rem' }}
        >
          <div class="card-header">Profit / Loss</div>
          <div class="card-body text-dark">
            <h7 class="card-body">{this.props.coin}</h7>
            <p class="card-text"></p>
          </div>
        </div>

        <div
          class="card border-dark mb-0"
          style={{ width: '7rem', maxHeight: '7rem' }}
        >
          <div class="card-header">Holdings</div>
          <div class="card-body text-dark">
            <h7 class="card-body">{this.props.coin}</h7>
            <p class="card-text"></p>
          </div>
        </div>

        <div class="card border-dark mb-0" style={{ width: '12rem' }}>
          <div class="card-header">24H Profit / Loss</div>
          <div class="card-body text-dark">
            <h7 class="card-body">{this.props.coin}</h7>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coin_price: state.crypto.cryptoprice,
});

export default connect(mapStateToProps, {
  bitCoinPrice,
})(Totalrevenue);
