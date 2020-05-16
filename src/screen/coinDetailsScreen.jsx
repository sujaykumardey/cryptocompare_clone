import React, { Component } from 'react'
import CoinName from '../components/coinName'
import CoinHistoryPriceChart from '../components/coinHistoryPriceChart'
import CoinDetail from '../components/coinDetail'

import CoinInfoProfile from '../components/coinInfoProfile'
class CoinDetailsScreen extends Component {
  render () {
    return (
      <div className='container m-5'>
        <div className='row'>
          <div class='col-lg-3'>
            <CoinInfoProfile />
          </div>
          <div class='col-lg-9'>
            <CoinName />
            <CoinHistoryPriceChart />
            <CoinDetail />
            <div className='coin-details-container p-4'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinDetailsScreen
