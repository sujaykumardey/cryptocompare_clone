import React, { Component } from 'react';
import CoinListCards from './CoinListCards'
import CoinListTable from './CoinListTable'
import WebSocket from 'ws';
 
// const wss = new WebSocket.Server({
//   port: 3000,
//   perMessageDeflate: {
//     zlibDeflateOptions: {
//       // See zlib defaults.
//       chunkSize: 1024,
//       memLevel: 7,
//       level: 3
//     },
//     zlibInflateOptions: {
//       chunkSize: 10 * 1024
//     },
//     // Other options settable:
//     clientNoContextTakeover: true, // Defaults to negotiated value.
//     serverNoContextTakeover: true, // Defaults to negotiated value.
//     serverMaxWindowBits: 10, // Defaults to negotiated value.
//     // Below options specified as default values.
//     concurrencyLimit: 10, // Limits zlib concurrency for perf.
//     threshold: 1024 // Size (in bytes) below which messages
//     // should not be compressed.
//   }
// });
class CoinList extends Component {
    constructor(){
        super()
        this.state={
            apiKey:"39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1"
        }
    }
    componentDidMount(){
        // this.props.fetchCrypto()
        fetch("https://min-api.cryptocompare.com/data/top/totaltoptiervol?extraParams=https:%2F%2Fwww.cryptocompare.com&limit=10&page=0&tsym=USD&key=39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1")
        .then(res=>res.json())
        .then(coins=>{
            console.log(coins)
        })
        // fetch("https://auth-api.cryptocompare.com/people/increase?ids=2,3,4,5,139,156&type=YES&view=1&key=39384a547eab1c6790c330f4c0ab9403cb9f98c2c5ab3b5ac5b47fe4d6f54dc1")
        // .then(res=>res.json())
        // .then(coins=>{
        //     console.log(coins,"hi")
        // })
         
const ws = new WebSocket('wss://streamer.cryptocompare.com/v2?format=streamer');
 
ws.on('open', function open() {
  ws.send('something');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});
    }
    render() { 
        return ( 
            <div>
            <CoinListCards/>
            <CoinListTable/>
        </div>
      
         );
    }
}
 
export default CoinList;