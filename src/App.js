import React, { Component } from 'react'
import CoinDetailsScreen from './screen/coinDetailsScreen'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className='coindetailsscreen border-gray'>
        <CoinDetailsScreen />
      </div>
    )
  }
}
