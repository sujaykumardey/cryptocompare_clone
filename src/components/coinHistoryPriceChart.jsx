import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

class CoinHistoryPriceChart extends Component {
  state = {
    options: {
        time: {
            useUTC: false
        },
      rangeSelector: {
        selected: 1
      },

      yAxis: [
        {
          min: 9200,
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
    this.handleDayButton()
  }
  handleDayButton = () => {
    let url1 = `https://min-api.cryptocompare.com/data/v2/histominute?aggregate=1&e=CCCAGG&extraParams=https:%2F%2Fwww.cryptocompare.com&fsym=BTC&limit=1450&tryConversion=false&tsym=USD&api_key=19f6ab549381046870ae7932ef6224e1e11266bd4dad353ef9a8abc930da70f6`
    fetch(url1)
      .then(response => response.json())
      .then(historicalDay => {
        let newHistoricalData = historicalDay.Data.Data
        console.log('newHistoricalData', newHistoricalData)

        let columnData = []
        let areaData = []
        var xAxixData = []

        let minOld = newHistoricalData[0].close
        let maxOld = newHistoricalData[0].close
        for (let i = 0; i < newHistoricalData.length; i++) {
            if (newHistoricalData[i].close < minOld) {
                minOld = newHistoricalData[i].close
              }
              if (newHistoricalData[i].close > maxOld) {
                maxOld = newHistoricalData[i].close
              }
          var d = new Date(newHistoricalData[i].time * 1000)
          //   console.log(d.getHours())

          if (d.getMinutes() % 10 === 0) {
            let timeHHMM = d.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit'
            })
            // console.log(d)
            //   xAxixData.push(timeHHMM)
            areaData.push([
              newHistoricalData[i].time * 1000,
              newHistoricalData[i].close
            ])
            columnData.push([
              newHistoricalData[i].time * 1000,
              newHistoricalData[i].volumefrom
            ])
            // i = i + 57
          }
        }
        // console.log(xAxixData)

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

        this.setState({
          historicalData: historicalDay.Data.Data,
          options: {
            ...this.state.options,
            series,
            yAxis: [
              {
                min: minOld,
                max: maxOld,
                labels: {
                  align: 'left'
                },
                height: '80%',
                resize: {
                  enabled: true
                }
              },
              ...this.state.options.yAxis.slice(1)
            ]
          }        })
        
      })
      .catch(e => console.log('Error in fetching boards'))
  }
  handleHourButton = () => {
    let url = `https://min-api.cryptocompare.com/data/v2/histominute?aggregate=1&e=CCCAGG&extraParams=https:%2F%2Fwww.cryptocompare.com&fsym=BTC&limit=61&tryConversion=false&tsym=USD&api_key=19f6ab549381046870ae7932ef6224e1e11266bd4dad353ef9a8abc930da70f6`
    fetch(url)
      .then(response => response.json())
      .then(historicalDataHour => {
        let newHistoricalData = historicalDataHour.Data.Data
        console.log('newHistoricalData', newHistoricalData)

        let columnData = []
        let areaData = []
        
        let minOld = newHistoricalData[0].close
        let maxOld = newHistoricalData[0].close
        for (let i = 0; i < newHistoricalData.length; i++) {
            
          if (newHistoricalData[i].close < minOld) {
            minOld = newHistoricalData[i].close
          }
          if (newHistoricalData[i].close > maxOld) {
            maxOld = newHistoricalData[i].close
          }
          var d = new Date(newHistoricalData[i].time * 1000)
          areaData.push([
            newHistoricalData[i].time * 1000,
            newHistoricalData[i].close
          ])
          columnData.push([
            newHistoricalData[i].time * 1000,
            newHistoricalData[i].volumefrom
          ])
        }
        console.log('min xxxx', maxOld)

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

        this.setState({
          historicalDataHourly: historicalDataHour.Data.Data,
          options: {
            ...this.state.options,
            series,
            yAxis: [
              {
                min: minOld,
                max: maxOld,
                labels: {
                  align: 'left'
                },
                height: '80%',
                resize: {
                  enabled: true
                }
              },
              ...this.state.options.yAxis.slice(1)
            ]
          }
        })
      })
      .catch(e => console.log(e))
  }
  handleWeekButton = () => {
    let url = `https://min-api.cryptocompare.com/data/v2/histohour?aggregate=1&e=CCCAGG&extraParams=https:%2F%2Fwww.cryptocompare.com&fsym=BTC&limit=169&tryConversion=false&tsym=USD&api_key=19f6ab549381046870ae7932ef6224e1e11266bd4dad353ef9a8abc930da70f6`
    fetch(url)
      .then(response => response.json())
      .then(historicalDataWeek => {
        let newHistoricalData = historicalDataWeek.Data.Data
        console.log('newHistoricalData', newHistoricalData)

        let columnData = []
        let areaData = []

        let minOld = newHistoricalData[0].close
        let maxOld = newHistoricalData[0].close
        for (let i = 0; i < newHistoricalData.length; i++) {
            if (newHistoricalData[i].close < minOld) {
                minOld = newHistoricalData[i].close
              }
              if (newHistoricalData[i].close > maxOld) {
                maxOld = newHistoricalData[i].close
              }
          areaData.push([
            newHistoricalData[i].time * 1000,
            newHistoricalData[i].close
          ])
          columnData.push([
            newHistoricalData[i].time * 1000,
            newHistoricalData[i].volumefrom
          ])
        }
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

        this.setState({
          historicalDataWeekly: historicalDataWeek.Data.Data,
          options: {
            ...this.state.options,
            series,
            yAxis: [
              {
                min: minOld,
                max: maxOld,
                labels: {
                  align: 'left'
                },
                height: '80%',
                resize: {
                  enabled: true
                }
              },
              ...this.state.options.yAxis.slice(1)
            ]
          }
        })
      })
      .catch(e => console.log(e))
  }
  handleMonthButton = () => {
    let url = `https://min-api.cryptocompare.com/data/v2/histohour?aggregate=1&e=CCCAGG&extraParams=https:%2F%2Fwww.cryptocompare.com&fsym=BTC&limit=726&tryConversion=false&tsym=USD&api_key=19f6ab549381046870ae7932ef6224e1e11266bd4dad353ef9a8abc930da70f6`
    fetch(url)
      .then(response => response.json())
      .then(historicalDataMonth => {
        let newHistoricalData = historicalDataMonth.Data.Data
        console.log('newHistoricalData', newHistoricalData)

        let columnData = []
        let areaData = []

        let minOld = newHistoricalData[0].close
        let maxOld = newHistoricalData[0].close
        for (let i = 0; i < newHistoricalData.length; i++) {
            if (newHistoricalData[i].close < minOld) {
                minOld = newHistoricalData[i].close
              }
              if (newHistoricalData[i].close > maxOld) {
                maxOld = newHistoricalData[i].close
              }
          areaData.push([
            newHistoricalData[i].time * 1000,
            newHistoricalData[i].close
          ])
          columnData.push([
            newHistoricalData[i].time * 1000,
            newHistoricalData[i].volumefrom
          ])
        }
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

        this.setState({
          historicalDataMonthly: historicalDataMonth.Data.Data,
          options: {
            ...this.state.options,
            series,
            yAxis: [
              {
                min: minOld,
                max: maxOld,
                labels: {
                  align: 'left'
                },
                height: '80%',
                resize: {
                  enabled: true
                }
              },
              ...this.state.options.yAxis.slice(1)
            ]
          }
        })
      })
      .catch(e => console.log(e))
  }
  render () {
    return (
      <div className='p-2 m-2 border-gray'>
        <div className='highchart' >
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={this.state.options}
          />
        </div>
        <div>
          <button
            type='button'
            onClick={this.handleHourButton}
            class='btn btn-outline-success  px-2'
          >
            1 Hour
          </button>
          <button
            type='button'
            onClick={this.handleDayButton}
            class='btn btn-outline-success pr-2'
          >
            1 Day
          </button>
          <button
            type='button'
            onClick={this.handleWeekButton}
            class='btn btn-outline-success pr-2'
          >
            1 Week
          </button>
          <button
            type='button'
            onClick={this.handleMonthButton}
            class='btn btn-outline-success pr-2'
          >
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
