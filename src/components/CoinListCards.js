import React, { Component } from 'react';
class CoinListCards extends Component {
    constructor(){
        super()
      this.state={ws:null,
                  data:[]
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
            var ws = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=be0c6c7da1dfcc09d10b8818d43457b3d83b8cdf8c85d482072715a0e7043bd9');
            let that = this; // cache the this
            var connectInterval;    // websocket onopen event listener
            ws.onopen = () => {
                console.log("connected websocket main component");    
                this.setState({ ws: ws });
                const subRequest = {
                    "action": "SubAdd",
                    "subs": ["5~CCCAGG~BTC~USD","24~CCCAGG~BTC~USD~H","5~CCCAGG~ETH~USD","24~CCCAGG~ETH~USD~H","5~CCCAGG~LTC~USD","24~CCCAGG~LTC~USD~H","5~CCCAGG~XRP~USD","24~CCCAGG~XRP~USD~H"]
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
                console.log(message,"cards data")
                let volume24hour=message.VOLUME24HOUR
                let coinExist=false;
                const prevData=this.state.data.map(coin=>{
                    console.log(coin)
                    if(message.TYPE==="5"&&coin.sym===message.FROMSYMBOL){
                    if(message.PRICE!==undefined)
                    {coin.price=message.PRICE;
                        console.log(coin.price,message.FROMSYMBOL,"inside price")}
                    else if(message.LASTMARKET!==undefined)
                         coin.lastMarket=message.LASTMARKET
                    else if(message.LASTVOLUME!==undefined)
                         coin.lastVol=message.LASTVOLUME
                    else if(message.VOLUME24HOURTO!==undefined)
                         coin.vol=message.VOLUME24HOURTO
                         coinExist=true;
                        }
                    return coin
                 })  
                 if(!coinExist&&message.TYPE==="5"&&message.FROMSYMBOL!==undefined)
                  {  
                    const data ={ vol:volume24hour,sym:message.FROMSYMBOL,tosym:message.TOSYMBOL,price:message.PRICE,lastMarket:message.LASTMARKET,lastVol:message.LASTVOLUME}
                    console.log(data,"push data")     
                    prevData.push(data)
                  }
                    this.setState({data:prevData})
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
            <div className="card-container">
               {this.state.data.length===4&&this.state.data.map(coin=><div className="card">
                 <div className="card-header1 m-1">
                 {coin.sym}-{coin.tosym}
                 <span className="vol" style={{fontSize:11,paddingLeft:"70px",fontWeight:"none"}}>Vol:{coin.vol}</span>
                 </div>
                 <div className="card-price m-1">
                    $ {coin.price} 
                 </div>
                 <div className="graph-section">graph</div>
                 <ul className="card-footer">
                   <li>just now</li>
                   <li>{coin.lastMarket}</li>
                   <li>{coin.lastVol}</li>
                 </ul>
                {/* {this.state.dat} */}
            </div>
               )}
            </div>
            
          );
    }
}
 
export default CoinListCards;