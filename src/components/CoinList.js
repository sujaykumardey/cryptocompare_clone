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