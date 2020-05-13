import React, { Component } from 'react';
class CoinListCards extends Component {
    constructor(){
        super()
      this.state={ws:null,
                  data:{},
                  bt:"btc"
                }
    }
    componentDidMount(){
        this.connect();
        console.log(this.connect,"connect return")
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
                let volume24hour=message.VOLUME24HOUR
                var data ={ vol:volume24hour,sym:message.FROMSYMBOL,tosym:message.TOSYMBOL,price:message.PRICE,lastMarket:message.LASTMARKET,lastVol:message.LASTVOLUME}
                this.setState({data:data})
                console.log("Received from Cryptocompare: " + message.FROMSYMBOL,message.TOSYMBOL,volume24hour,message.LASTMARKET,message.LASTVOLUME);         
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
        console.log(this.state.data,"data value")
        return ( 
            <div style={{display:"flex"}}>
            <div className="card"style={{width:"300px",height:200}}>
                 <div className="card-header">
                 {this.state.data.sym!==undefined&&this.state.data.sym}-USD
                 <span className="vol">Vol:{this.state.data.vol!==undefined&&this.state.data.vol}</span>
                 </div>
                 <div>
                    $ {this.state.data.price} 
                 </div>
                 <div className="graph-section">graph</div>
                 <footer>
                    just now
                  <span>{this.state.data.lastMarket!==undefined&&this.state.data.lastMarket}</span>
                  <span>{this.state.data.lastVol!==undefined&&this.state.data.lastVol}</span>
                 </footer>
                {/* {this.state.dat} */}
            </div>
            <div className="card" style={{width:300,height:200,margin:"0 15px"}}>
                {/* {this.state.ws} */}
                ETH-USD
            </div>
            <div className="card" style={{width:300,height:200,margin:"0 15px"}}>
                {/* {this.state.ws} */}
                LTC-USD
            </div>
            <div className="card" style={{width:300,height:200}}>
                {/* {this.state.ws} */}
                XRP-USD
            </div>
            
            </div>
            
          );
    }
}
 
export default CoinListCards;