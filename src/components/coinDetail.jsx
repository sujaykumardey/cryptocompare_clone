import React, { Component } from 'react'
class CoinDetail extends Component {
  state = {}
  render () {
    return (
      <div>
        <div className=' w-25 p-3'>Details</div>
        <div>
          <table class='table table-bordered table-sm'>
            <thead>
              <tr>
                <th scope='col'>Max Supply</th>
                <th scope='col'>Algorithm</th>
                <th scope='col'>Proof Type</th>
                <th scope='col'>Start Date</th>

                <th scope='col'>Twitter</th>

                <th scope='col'>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>
                  21,000,000.0
                  <div>DifficultyAdj.</div>
                </th>
                <td>
                  SHA-256
                  <div>BlockRR.</div>
                </td>
                <td>
                  PoW
                  <div>BlockNo.</div>
                </td>

                <td>
                  03/01/2009
                  <div>Network H/s</div>
                </td>

                <td>
                  {' '}
                  <div>Current Supply</div>
                </td>

                <td>
                  <a href='https://bitcoin.org/en/'>Bitcoin</a>{' '}
                  <div>Block Reward</div>
                </td>
              </tr>
              {/* Row-2 */}
              <tr>
                <td scope='row'>2016 blocks</td>
                <td>50%</td>
                <td>630,416.0</td>
                <td>115,284,461,532.5</td>
                <td>18,377,600.0</td>
                <td>6.3</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        
      </div>
    )
  }
}

export default CoinDetail
