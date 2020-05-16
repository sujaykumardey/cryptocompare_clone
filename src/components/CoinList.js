import React, { Component } from 'react';
import CoinListCards from './CoinListCards'
import CoinListTable from './CoinListTable'
import Forum from './Forum'
import News from './News';
import propsType from 'prop-types'
import {fetchTopTenCrypto,fetchNews,fetchAllCrypto} from "../actions/coinsActions"
// import{fetchNews,fetchForum} from "../assets/credentials"
import {connect} from "react-redux"
import{Link} from "react-router-dom"
class CoinList extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            // news:[],
            show:1,
            actionVal:"SubAdd",
            bgColorc: "white",borderClrc:"3px solid #00d665",
            bgColorf:"",borderClrf:"",
            bgColorn:"",borderClrn:"",
        }
    }
   
    componentDidMount(){
        this.props.fetchTopTenCrypto()
       this.props.fetchNews()
        // this.props.fetchAllCrypto()
        if(this.props.topTenCrypto.length===10){
            this.props.topTenCrypto.forEach(coin=>{
                this.state.data.push({img:coin.CoinInfo.ImageUrl,fullName:coin.CoinInfo.FullName})
            })
        }
        this.connect();
        }
        timeout = 250; // Initial timeout duration as a class variable/**
        //  * @function connect
        //  * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
        //  *
        connect = () => {
            var ws = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=be0c6c7da1dfcc09d10b8818d43457b3d83b8cdf8c85d482072715a0e7043bd9');
            let that = this; // cache the this
            var connectInterval;    // websocket onopen event listener
            ws.onopen = () => {
                console.log("connected websocket main component");    
               this.setState({ ws: ws });
                var subRequest = {
                    "action":`${this.state.actionVal}`,
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
                console.log(message.TYPE,message)
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
            showForum=()=>{
                console.log("clicked forum")
                this.setState({show:2,actionVal:"SubRemove",
                bgColorf: "white",borderClrf:"3px solid #00d665",
                bgColorc:"",borderClrc:"",
                bgColorn:"",borderClrn:"",
                })
            }
            showNews=()=>{
                console.log("clicked News")
                this.setState({show:3,actionVal:"SubRemove",
                bgColorn: "white",borderClrn:"3px solid #00d665",
                bgColorc:"",borderClrc:"",
                bgColorf:"",borderClrf:"",
                
                })
                // const da=fetchNews()
                // console.log(da,"news fetch")
            }
            showCoins=()=>{ 
                this.setState({ show:1,actionVal:"SubAdd",
                bgColorc: "white",borderClrc:"3px solid #00d665",
                bgColorf:"",borderClrf:"",
                bgColorn:"",borderClrn:"",
                })
          
            }
    render() { 
        console.log(this.state,"BTC DATA")
    return(
        <div className="coin-list">
            <CoinListCards/>
            <div className="coin-list-table">
              <div className="coinTable-header">
               <div className="coinTable-header-nav"
                 style={{ backgroundColor: this.state.bgColorc,borderTop:this.state.borderClrc}}
                 onClick={this.showCoins}>COINS</div>
                  <div className="coinTable-header-nav"
                   style={{ backgroundColor: this.state.bgColorf,borderTop:this.state.borderClrf }}
                   onClick={this.showForum}>FORUM</div>
                  <div className="coinTable-header-nav"
                   style={{ backgroundColor: this.state.bgColorn,borderTop:this.state.borderClrn }}
                   onClick={this.showNews}>
                     NEWS
                  </div>
               </div>
           {this.state.show===1&&
            <div className="feature-table m-2">
               Featured The World's #1 Online Crypto Casino. Wager 5 Mbtc - Get 100 Free Spins
            <CoinListTable data={this.state.data} coinInfo={this.props.topTenCrypto} />
            <div className="coinlist-table-footer">
            <Link to="/coins/list/USD/1">
            <button className="view-all-coins-btn">
                View All Coins <i className="fa fa-chevron-down"></i>
            </button>
            </Link>
            </div>
            </div>}
           {this.state.show===2&&
            <div className="forum ">
                <Forum/>
                <Forum/>
            </div>
            }
            {this.state.show===3&&
            <div className="news-container ">
                {this.props.forum.slice(0,5).map(data=>
                <News news={data}/>
                )}
            </div>
            }
            </div>
        </div>
         );
    }
}

CoinList.propsType=({
    fetchTopTenCrypto:propsType.func.isRequired,
    fetchAllCrypto:propsType.func.isRequired,
    fetchForum:propsType.func.isRequired,
    topTenCrypt:propsType.array.isRequired,
    allCrypto:propsType.array.isRequired
 })
 const mapStatetoProps=state=>({
     topTenCrypto:state.crypto.topTenCrypto,
     allCrypto:state.crypto.allCrypto,
     forum:state.crypto.forum
 })
 
 export default connect(mapStatetoProps,{fetchTopTenCrypto,fetchNews,fetchAllCrypto})(CoinList);