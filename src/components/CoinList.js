import React, { Component } from 'react';
import CoinListCards from './CoinListCards'
import CoinListTable from './CoinListTable'

class CoinList extends Component {
    constructor(){
        super()
        this.state={
            apiKey:"39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1"
        }
    }
    componentDidMount(){
        this.props.fetchCrypto()
      
        // fetch("https://auth-api.cryptocompare.com/people/increase?ids=2,3,4,5,139,156&type=YES&view=1&key=39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1")
        // .then(res=>res.json())
        // .then(coins=>{
        //     console.log(coins,"hi")
        // })
        
            this.connect();
        }
        timeout = 250; // Initial timeout duration as a class variable/**
        //  * @function connect
        //  * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
        //  */
        connect = () => {
            var apiKey = "39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1";
            var ws = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);
            let that = this; // cache the this
            var connectInterval;    // websocket onopen event listener
            ws.onopen = () => {
                console.log("connected websocket main component");    
               this.setState({ ws: ws });
                var subRequest = {
                    "action": "SubAdd",
                    "subs": ["5~CCCAGG~BTC~USD"]
                };
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
                console.log(message)
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
        return ( 
            <div>
            <CoinListCards/>
            <CoinListTable websocket={this.state.ws}/>
        </div>
      
         );
    }
}
 
export default CoinList;