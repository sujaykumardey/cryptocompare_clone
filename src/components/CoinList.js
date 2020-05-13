import React, { Component } from 'react';
import CoinListCards from './CoinListCards'
import CoinListTable from './CoinListTable'
import propsType from 'prop-types'
import {fetchCrypto} from "../actions/coinsActions"
import {connect} from "react-redux"
class CoinList extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            apiKey:"39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1"
        }
    }
    componentDidMount(){
        this.props.fetchCrypto()
        
        this.connect();
        }
        timeout = 250; // Initial timeout duration as a class variable/**
        //  * @function connect
        //  * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
        //  */
        connect = () => {
            var ws = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1');
            let that = this; // cache the this
            var connectInterval;    // websocket onopen event listener
            ws.onopen = () => {
                console.log("connected websocket main component");    
               this.setState({ ws: ws });
                var subRequest = {
                    "action":"SubAdd",
                    "subs":["11~BTC","21~BTC","5~CCCAGG~BTC~USD",
                           "11~ETH","21~ETH","5~CCCAGG~ETH~USD",
                           "11~BCH","21~BCH","5~CCCAGG~BCH~USD",
                           "11~BSV","21~BSV","5~CCCAGG~BSV~USD",
                           "11~XRP","21~XRP","5~CCCAGG~XRP~USD",
                           "11~EOS","21~EOS","5~CCCAGG~EOS~USD",
                           "11~LTC","21~LTC","5~CCCAGG~LTC~USD",
                           "11~ETC","21~ETC","5~CCCAGG~ETC~USD",
                           "11~LINK","21~LINK","5~CCCAGG~LINK~USD",
                           "11~TRX","21~TRX","5~CCCAGG~TRX~ETH",
                           "5~CCCAGG~TRX~USD"]
                } 
                ws.send(JSON.stringify(subRequest));
                that.timeout = 250; // reset timer to 250 on open of websocket connection
                clearTimeout(connectInterval); // clear Interval on on open of websocket connection
            };    // websocket onclose event listener
            ws.onclose = e => {
                console.log(
                    `Socket is closed. Reconnect will be attempted in ${Math.min(
                        10000 / 1000,
                        (that.timeout + that.timeout) / 1000
                    )} second.`,
                    e.reason
                );        that.timeout = that.timeout + that.timeout; //increment retry interval
                connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
            };  
            ws.onmessage = (event) => {
                // console.log(event)
                const message = JSON.parse(event.data)
                // console.log(message.TYPE,message)
                let coinExist=false;
                const prevData=this.state.data.map(coin=>{
                    console.log(coin)
                    if(message.TYPE==="5"&&coin.sym===message.FROMSYMBOL&&message.PRICE!==undefined)
                    {coin.price=message.PRICE;
                          coinExist=true;
                        console.log(coin.price,message.FROMSYMBOL,"inside price")}
                    else if(message.TYPE==="21"&&coin.sym===message.SYMBOL&&message.TOPTIERFULLVOLUME!==undefined)
                         coin.topTierVol=message.TOPTIERFULLVOLUME
                    else if(message.TYPE==="11"&&coin.sym===message.SYMBOL&&message.FULLVOLUME!==undefined)
                         coin.topTierVol=message.FULLVOLUME
                    return coin
                 })  
                 if(!coinExist&&message.TYPE==="5"&&message.PRICE!==undefined)
                  { const data={ vol:message.VOLUME24HOURTO,sym:message.FROMSYMBOL,tosym:message.TOSYMBOL,price:message.PRICE,topTierVol:message.TOPTIERFULLVOLUME}
                    console.log(data,"push data")     
                  prevData.push(data)
                  }
                    this.setState({data:prevData})
                
                // let volume24hour=message.VOLUME24HOURTO        // console.log("Received from Cryptocompare: " + message);          };
            // websocket onerror event listener
            }
            ws.onerror = err => {
                console.error(
                    "Socket encountered error: ",
                    err.message,
                    "Closing socket"
                );    
                    ws.close();
            };    };   
            check = () => {
    
                const { ws } = this.state;
                if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
            };
      
    render() { 
        console.log(this.state.data,"BTC DATA")
        return ( 
            <div>
            <CoinListCards/>
            <div className="coinTable-header">
          <div className="coinTable-header-button "
            style={{ backgroundColor: this.state.bgColor }}
            onClick={() => this.setState({ bgColor: "white" })}>COINS</div>
          <div className="coinTable-header-button ">FORUM</div>
          <div className="coinTable-header-button ">NEWS</div>
        </div>
        <div>
          Featured The World's #1 Online Crypto Casino. Wager 5 Mbtc - Get 100 Free Spins
        </div>
            {this.state.data.length===10&&<CoinListTable data={this.state.data} />}
        </div>
      
         );
    }
}

CoinList.propsType=({
    fetchCrypto:propsType.func.isRequired,
    coins:propsType.array.isRequired,
  
 })
 const mapStatetoProps=state=>({
     crypto:state.crypto.crypto,
 })
 
 export default connect(mapStatetoProps,{fetchCrypto})(CoinList);