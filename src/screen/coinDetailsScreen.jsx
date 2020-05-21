import React, { Component } from 'react'
import CoinName from '../components/coinName'
import CoinHistoryPriceChart from '../components/coinHistoryPriceChart'

import CoinInfoProfile from '../components/coinInfoProfile'
class CoinDetailsScreen extends Component {
  render () {
    return (
      <div className='screen-container  m-5'>
        <div className='row no-gutters'>
          <div class='col-lg-3'>
            <CoinInfoProfile />
          </div>
          <div class='col-lg-9 no-gutters'>
            <CoinName />
            <CoinHistoryPriceChart />
            {/* <CoinDetail /> */}
            
          </div>
        </div>
      </div>
    )
  }
}

export default CoinDetailsScreen
