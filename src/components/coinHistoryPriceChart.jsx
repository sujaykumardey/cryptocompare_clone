import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

class CoinHistoryPriceChart extends Component {
  state = {
    options: {
        rangeSelector: {
            selected: 1
        },
      yAxis: [
        {
          min: 8700,
          //         // max: 140,
          tickInterval: 50,
          labels: {
            align: 'left'
          },
          height: '80%',
          resize: {
            enabled: true
          }
        },
        {
          labels: {
            align: 'right'
          },
          top: '80%',
          height: '20%',
          offset: 0,
          resize: {
            enabled: true
        }
        }
      ],
      tooltip: {
        split: true
    },
  
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 800
            },
            chartOptions: {
              rangeSelector: {
                inputEnabled: false
              }
            }
          }
        ]
      }
    }
  }
  componentDidMount () {
    let url1 = `https://min-api.cryptocompare.com/data/v2/histominute?aggregate=1&e=CCCAGG&extraParams=https:%2F%2Fwww.cryptocompare.com&fsym=BTC&limit=1450&tryConversion=false&tsym=USD&api_key=19f6ab549381046870ae7932ef6224e1e11266bd4dad353ef9a8abc930da70f6`
    let url = `https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=100&api_key=19f6ab549381046870ae7932ef6224e1e11266bd4dad353ef9a8abc930da70f6`
    fetch(url1)
      .then(response => response.json())
      .then(historicalDay => {
        let newHistoricalData = historicalDay.Data.Data
        console.log('newHistoricalData', newHistoricalData)

        let columnData = []
        let areaData = []
        var xAxixData = []

        for (let i = 0; i < newHistoricalData.length; i++) {
          var d = new Date(newHistoricalData[i].time * 1000)
        //   console.log(d.getHours())
          if (
            (d.getHours() == 3 && d.getMinutes() == 0) ||
            (d.getHours() == 6 && d.getMinutes() == 0) ||
            (d.getHours() == 9 && d.getMinutes() == 0) ||
            (d.getHours() == 12 && d.getMinutes() == 0) ||
            (d.getHours() == 15 && d.getMinutes() == 0) ||
            (d.getHours() == 18 && d.getMinutes() == 0) ||
            (d.getHours() == 21 && d.getMinutes() == 0) ||
            (d.getHours() == 0 && d.getMinutes() == 0)
          ) {
            // console.log(d)
            // console.log(d.getHours() == 0)
           

            if (d.getHours() == 0 ) {
              let dateMonth = `${d.getUTCDate()} ${d.toLocaleString('default', {
                month: 'long'
              })}`
                            console.log(dateMonth)

              xAxixData.push(dateMonth)
           
            } else {
              let timeHHMM = d.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
              })
              xAxixData.push(timeHHMM)
            }
          }
          if( d.getMinutes() % 10 === 0){
            let timeHHMM = d.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
              })
              console.log(d)
            //   xAxixData.push(timeHHMM)
              areaData.push([newHistoricalData[i].time  * 1000, newHistoricalData[i].close])
              columnData.push([newHistoricalData[i].time  * 1000, newHistoricalData[i].volumefrom])
          }

        }
        console.log(xAxixData)
        
        let series = []
        series.push({
          type: 'area',
          name: 'CCCAGG Bitcoin Price',
          data: areaData
         
        })
        series.push({
          type: 'column',
          yAxis: 1,
          name: 'Volume To',
          data: columnData
        })
        let xAxis = {
          categories: []
        }

       
        this.setState({
          historicalData: historicalDay.Data.Data,
          options: { ...this.state.options, series}
        })
        // dispatch({
        //     type:actions.FETCH_BOARDS,
        //     payload: boards
        // })
      })
      .catch(e => console.log('Error in fetching boards'))
  }
  render () {
    return (
      <div>
        <div style={{ minWidth: '400px' }}>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={this.state.options}
          />
        </div>
        <div>
          <button type='button' onClick={} class='btn btn-outline-success px-2'>
            1 Hour
          </button>
          <button type='button' onClick={} class='btn btn-outline-success pr-2'>
            1 Day
          </button>
          <button type='button' onClick={} class='btn btn-outline-success pr-2'>
            1 Week
          </button>
          <button type='button' onClick={} class='btn btn-outline-success pr-2'>
            1 Month
          </button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  cards: state.cards.cards
})

export default CoinHistoryPriceChart
// export default connect(null, { fetchCards, addCard, deleteCard })(
//     CoinHistoryPriceChart
//   )
