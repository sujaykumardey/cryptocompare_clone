import React, { Component } from 'react'
import btcimg from '../btc.png'

class CoinInfoProfile extends Component {
  state = {}
  render () {
    return (
      <div>
        <div className='coin-info-image border-gray '>
          <div className='border-gray coin-short-form'>1 BTC =</div>
          <div className='coin-image text-center py-4'>
            <img src={btcimg} alt='Avatar' />
          </div>
        </div>
        <div>
          <h1 className='currency-name text-center '>Bitcoin</h1>
        </div>
        <div>
        
        <div><button type='button' class=' w-100 btn btn-labeled coin-follow'>
          <span class='btn-label '>
            <i class='fa fa-plus'></i>
          </span>
          Follow
        </button></div>
        <div><button type='button' class=' w-100 btn btn-labeled add-to-portfolio'>
          <span class='btn-label'>
            <i class='fa fa-bar-chart'></i>
          </span>
          + Portfolio
        </button></div>
        </div>
        
        
      </div>
    )
  }
}

export default CoinInfoProfile
