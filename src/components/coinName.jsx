import React, { Component } from 'react'
const CoinMarketDetail = () => {
  const tooltipTitleMktCap = `When calculating Market Capitalization (market cap), we account for all coins in circulation, including those held by team members or the company.
    This also includes coins in smart contracts or escrow. If the coins have been issued and have not been burned, they will be accounted for in the market cap.`
  return (
    <div className='d-flex '>
      <div className=' pr-2'>
        <div className=' pr-2 badge text-secondary'>
          Mkt. Cap.
          <i
            class='fa fa-info-circle'
            data-toggle='tooltip'
            data-placement='bottom'
            title={`${tooltipTitleMktCap}`}
          ></i>
        </div>
        <div className='label label-danger coin-market-border'>$ 6633</div>
      </div>
      <div className='pr-2'>
        <div className='badge text-secondary'>Vol. 24H</div>
        <div className='coin-market-border'>$154k</div>
      </div>
      <div className='pr-2'>
        <div className='badge text-secondary'>Open 24H</div>
        <div className='coin-market-border'>$ 8472.96</div>
      </div>
      <div className='pr-2'>
        <div className='badge text-secondary'>Low/High 24H</div>
        <div className='coin-market-border px-1'>$ 8472.96-$ 8472.96</div>
      </div>
      <div className='pr-2'>
        <div className='badge text-secondary'>Weiss Rating</div>
        <div className='text-center coin-market-border'>A-</div>
      </div>
    </div>
  )
}
class CoinName extends Component {
  render () {
    return (
      <div>
        
        <div className='d-flex'>
          <div class='dropdown'>
            <button
              type='button'
              class='btn btn-white dropdown-toggle'
              data-toggle='dropdown'
            ></button>
            <div class='dropdown-menu'>
              <a class='dropdown-item' href='#'>
                Link 1
              </a>
              <a class='dropdown-item' href='#'>
                Link 2
              </a>
              <a class='dropdown-item' href='#'>
                Link 3
              </a>
            </div>
          </div>
          <div className='pl-2'>
            <h1>$ 879ccccccccc6</h1>
          </div>
          <div className=' price-change-caret pl-4'>
            <i class='fas fa-caret-up pl-2 fa-3x'></i>
            <div className=''>2.56%</div>
          </div>
        </div>
        <CoinMarketDetail />
      </div>
    )
  }
}

export default CoinName
