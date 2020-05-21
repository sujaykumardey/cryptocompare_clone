import React, { Component } from 'react';
class CoinListCards extends Component {
    constructor(){
        super()
      this.state={ws:null,
                  data:[],
                  priceData:[]
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
                    "subs": ["5~CCCAGG~BTC~USD","24~CCCAGG~BTC~USD~H",
                             "5~CCCAGG~ETH~USD","24~CCCAGG~ETH~USD~H",
                             "5~CCCAGG~LTC~USD","24~CCCAGG~LTC~USD~H",
                             "5~CCCAGG~XRP~USD","24~CCCAGG~XRP~USD~H"
                            ]
                };
                ws.send(JSON.stringify(subRequest));
                that.timeout = 5000; // reset timer to 250 on open of websocket connection
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
                console.log(message.TYPE,"cards data")
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
          
                const pri=this.state.priceData
                if(message.TYPE===24)
                   {
                       pri.push(message)
                   }
                 this.setState({pricevData:pri})
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
        console.log(this.state.priceData,"data value")
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
                 {/* <div className="graph-section" style={{backgroundColor:"grey",height:"20%"}}> */}
                  <svg  width="100%">
                      <path cs="100,100" d="M0.5,27.80215 L16.5,29.06945
                                      L31.5,27.19265 L47.5,30.22635 L62.5,27.91485 
                                      L78.5,36.6491 L93.5,38.3856 L109.5,26.858 
                                      L125.5,12.14605 L140.5,16.13425 L156.5,16.63105
                                       L171.5,15.63515 L187.5,16.5609 L202.5,26.2761
                                        L218.5,25.9955 L233.5,48.29055 L249.5,49.5452 
                                        L265.5,43.6181 L280.5,42.81655 L296.5,39.2688 
                                        L311.5,39.9841 L327.5,34.43305 L342.5,39.34125
                                         L358.5,35.37605 L358.5,69.5 L0.5,69.5 L0.5,27.80215 Z"
                                 fill="#1d8b3a" stroke="#000" fill-opacity="0.4" stroke-width="1" stroke-opacity="0" class="amcharts-graph-fill"></path>
                  </svg>
                 {/* </div> */}
                 <ul className="card-footer" >
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