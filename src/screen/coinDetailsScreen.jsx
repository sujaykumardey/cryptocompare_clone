import React, { Component } from 'react';
import CoinName from '../components/coinName'
import CoinHistoryPriceChart from '../components/coinHistoryPriceChart'
import CoinDetail from '../components/coinDetail'
class CoinDetailsScreen extends Component {
    render() { 
        return ( 
            <div className='coin-details-container p-4'>
            <CoinName/>
            <CoinHistoryPriceChart/>
            <CoinDetail/>
            </div>
         );
    }
}
 
export default CoinDetailsScreen;