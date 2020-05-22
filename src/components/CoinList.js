import React, { Component } from 'react';
import CoinListCards from './CoinListCards'
import CoinListTable from './CoinListTable'
import Forum from './Forum'
import News from './News';
import propsType from 'prop-types'
import {fetchTopTenCrypto,fetchNews,fetchAllCrypto,fetchCoinDetail} from "../actions/coinsActions"
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
            bgColorc:"white",borderClrc:"3px solid #00d665",
            bgColorf:"",borderClrf:"",
            bgColorn:"",borderClrn:"",
        }
    }
    
    componentDidMount(){
        this.props.fetchCoinDetail();
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
        timeout = 2500; // Initial timeout duration as a class variable/**
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
               const subs=this.props.topTenCrypto.map(crypto=>{
                   return crypto.CoinInfo.Name
               })
                var subRequest = {
                    "action":`${this.state.actionVal}`,
                    "subs":[`11~${subs[0]}`,`21~${subs[0]}`,`5~CCCAGG~${subs[0]}~USD`,
                            `11~${subs[1]}`,`21~${subs[1]}`,`5~CCCAGG~${subs[1]}~USD`,
                            `11~${subs[2]}`,`21~${subs[2]}`,`5~CCCAGG~${subs[2]}~USD`,
                            `11~${subs[3]}`,`21~${subs[3]}`,`5~CCCAGG~${subs[3]}~USD`,
                            `11~${subs[4]}`,`21~${subs[4]}`,`5~CCCAGG~${subs[4]}~USD`,
                            `11~${subs[5]}`,`21~${subs[5]}`,`5~CCCAGG~${subs[5]}~USD`,
                            `11~${subs[6]}`,`21~${subs[6]}`,`5~CCCAGG~${subs[6]}~USD`,
                            `11~${subs[7]}`,`21~${subs[7]}`,`5~CCCAGG~${subs[7]}~USD`,
                            `11~${subs[8]}`,`21~${subs[8]}`,`5~CCCAGG~${subs[8]}~USD`,
                            `11~${subs[9]}`,`21~${subs[9]}`,`5~CCCAGG~${subs[9]}~USD`,
                    ]
                } 
                ws.send(JSON.stringify(subRequest));
                that.timeout = 2500; // reset timer to 250 on open of websocket connection
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
                <Forum/>
            </div>
            }
            {this.state.show===3&&
            <div className="news-container">
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
     topTenCrypto:state.cryptos.topTenCrypto,
     allCrypto:state.cryptos.allCrypto,
     forum:state.cryptos.forum
 })
 
 export default connect(mapStatetoProps,{fetchTopTenCrypto,fetchNews,fetchAllCrypto,fetchCoinDetail})(CoinList);