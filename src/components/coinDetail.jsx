import React, { Component } from 'react'
class CoinDetail extends Component {
  state = {}
  render () {
    return (
      <div className='border-gray coin-properties-container'>
        <div className=' coin-detail-heading'>DETAILS</div>
        <div className='p-1'>
          <table class='table table-bordered pr-4 table-sm'>
            <thead>
              <tr className='table-heading'>
                <th scope='col'>Max Supply</th>
                <th scope='col'>Algorithm</th>
                <th scope='col'>Proof Type</th>
                <th scope='col'>Start Date</th>

                <th scope='col'>Twitter</th>

                {/* <th scope='col'>Website</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className='table-row'>
                <td scope='row'>
                  21,000,000.0
                  <div className='font-weight-bold table-heading'>DifficultyAdj.</div>
                </td>
                <td>
                  SHA-256
                  <div className='font-weight-bold table-heading'>BlockRR.</div>
                </td>
                <td>
                  PoW
                  <div className='font-weight-bold table-heading'>BlockNo.</div>
                </td>

                <td>
                  03/01/2009
                  <div className='font-weight-bold table-heading'>Network H/s</div>
                </td>

                <td>
                  {' '}
                  <div className='font-weight-bold'>Current Supply</div>
                </td>

                {/* <td>
                  <a href='https://bitcoin.org/en/'>Bitcoin</a>{' '}
                  <div className='font-weight-bold'>Block Reward</div>
                </td> */}
              </tr>
              {/* Row-2 */}
              <tr className='table-row'>
                <td scope='row'>2016 blocks</td>
                <td>50%</td>
                <td>630,416.0</td>
                <td>115,284,461,532.5</td>
                <td>18,377,600.0</td>
                
              </tr>
            </tbody>
          </table>
        </div>
        <div className='coin-details-paragraph'>
          <p>Bitcoin uses peer-to-peer technology to operate with no central
          authority or banks; managing transactions and the issuing of bitcoins
          is carried out collectively by the network. Although other
          cryptocurrencies have come before, Bitcoin is the first decentralized
          cryptocurrency - Its reputation has spawned copies and evolution in
          the space.</p>
          <p>
           With the largest variety of markets and the biggest value -
          having reached a peak of 318 billion USD - Bitcoin is here to stay. As
          with any new invention, there can be improvements or flaws in the
          initial model however the community and a team of dedicated developers
          are pushing to overcome any obstacle they come across. It is also the
          most traded cryptocurrency and one of the main entry points for all
          the other cryptocurrencies. The price is as unstable as always and it
          can go up or down by 10%-20% in a single day. 
          </p>
          <p>
          Bitcoin is an SHA-256 POW coin with almost 21,000,000 total minable coins. The block time is
          10 minutes. See below for a full range of Bitcoin markets where you
          can trade US Dollars for Bitcoin, crypto to Bitcoin and many other
          fiat currencies too.</p>
        </div>
      </div>
    )
  }
}

export default CoinDetail
