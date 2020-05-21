import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import CoinDetail from './coinDetail'

class CoinHistoryPriceChart extends Component {
  state = {
    isButtonClicked: 'day',
    intervalId: null,
    options: {
      time: {
        useUTC: false
      },
      rangeSelector: {
        // selected: 1
        enabled: false
      },
      navigator: {
        enabled: false
      },
      scrollbar: {
        enabled: false
      },
      chart: {
        renderTo: 'chart',
        type: 'area',
        animation: true,
        spacingTop: 0,
        spacingRight: 0,
        // spacingBottom: 0,
        spacingLeft: 0,
        plotBorderWidth: 0,
        marginRight: 0,//-60, //this does move the chart but you'll need to recompute it
        marginLeft: 15,//-60,  //whenever the page changes width
        marginTop: 0,
        // marginBottom: 0
    },

      yAxis: [
        {
          opposite: false,

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
          opposite: false,
            labels: {
              align: 'left'
            },
            // max: 50000,
          top: '80%',
          height: '20%',
          offset: 0,
          resize: {
            enabled: true
          }
        },
        {
          opposite: false
        }
      ],
      tooltip: {
        split: true
      },
      plotOptions: {
        
        series: {
            pointPadding: 0,
           groupPadding: 0,
            borderWidth: 2,
            shadow: false,
          lineColor: '#2d6fa3',
          borderColor: '#006098',
          lineWidth: 0.5,
        //   pointStart: Date.UTC(2020, 3, 21),
        //   pointInterval: 3 * 24 * 3600 * 1000
        }
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
  getDayData = () => {
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
        let maxoldColumnVol= newHistoricalData[0].volumefrom
        for (let i = 0; i < newHistoricalData.length; i++) {

          
          if (newHistoricalData[i].close < minOld) {
            minOld = newHistoricalData[i].close
          }
          if (newHistoricalData[i].close > maxOld) {
            maxOld = newHistoricalData[i].close
          }
          
          var d = new Date(newHistoricalData[i].time * 1000)
            // console.log(d.getHours())

          if (d.getMinutes() % 10 === 0) {
            let timeHHMM = d.toLocaleTimeString(navigator.language, {
              hour: '2-digit',
              minute: '2-digit'
            })
            if (newHistoricalData[i].volumefrom > maxoldColumnVol) {
                maxoldColumnVol = newHistoricalData[i].volumefrom
              }
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
          data: areaData,
          color: '#e8eef4'
        })
        series.push({
          type: 'column',
          yAxis: 1,
          name: 'Volume To',
          data: columnData,
          color: '#457dac'
        })

        this.setState({
          isButtonClicked: 'day',

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
              },{
                ...this.state.options.yAxis[1],
                // max:maxoldColumnVol
              },
              ...this.state.options.yAxis.slice(2),
              
            ]
          }
        })
      })
      .catch(e => console.log('Error in fetching boards'))
  }
  handleDayButton = () => {
    if (this.state.intervalId !== null) {
      clearInterval(this.state.intervalId)
    }
    this.getDayData()
    let intervalId = setInterval(function () {
      var date = new Date()
      if (date.getHours === 0) {
        this.getDayData()
      }
    }, 60000)
    this.setState({ intervalId })
  }
  handleHourButton = () => {
    clearInterval(this.state.intervalId)

    this.getHourData()
    let intervalId = setInterval(() => {
      var date = new Date()
    //   console.log('datemmmmmm', date.getSeconds())

      if (date.getSeconds() == 0) {
        console.log('datemmmmmmdfdfsdfsdfsdff')

        this.getHourData()
      }
    }, 1000)

    this.setState({ intervalId })
  }
  getHourData = () => {
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
        let maxoldColumnVol= newHistoricalData[0].volumefrom
        for (let i = 0; i < newHistoricalData.length; i++) {
          if (newHistoricalData[i].close < minOld) {
            minOld = newHistoricalData[i].close
          }
          if (newHistoricalData[i].close > maxOld) {
            maxOld = newHistoricalData[i].close
          }
          if (newHistoricalData[i].volumefrom > maxoldColumnVol) {
            maxoldColumnVol = newHistoricalData[i].volumefrom
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
          data: areaData,
          color: '#e8eef4'
        })
        series.push({
          type: 'column',
          yAxis: 1,
          name: 'Volume To',
          data: columnData,
          color: '#457dac'
        })

        this.setState({
          isButtonClicked: 'hour',

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
              },{
                ...this.state.options.yAxis[1],
                // max:maxoldColumnVol
              },
              ...this.state.options.yAxis.slice(2)
            ]
          }
        })
      })
      .catch(e => console.log(e))
  }
  handleWeekButton = () => {
    clearInterval(this.state.intervalId)
    this.getWeekData()
    let intervalId = setInterval(this.getWeekData, 604800000)
    this.setState({ intervalId })
  }
  getWeekData = () => {
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
        let maxoldColumnVol= newHistoricalData[0].volumefrom
        for (let i = 0; i < newHistoricalData.length; i++) {
          if (newHistoricalData[i].close < minOld) {
            minOld = newHistoricalData[i].close
          }
          if (newHistoricalData[i].close > maxOld) {
            maxOld = newHistoricalData[i].close
          }
          if (newHistoricalData[i].volumefrom > maxoldColumnVol) {
            maxoldColumnVol = newHistoricalData[i].volumefrom
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
          data: areaData,
          color: '#e8eef4',
          pointRange: 4 * 24 * 3600 * 1000,
        })
        series.push({
          type: 'column',
          yAxis: 1,
          name: 'Volume To',
          data: columnData,
          color: '#457dac',
          pointRange: 3 * 24 * 3600 * 1000,
        })

        this.setState({
          isButtonClicked: 'week',

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
              },{
                ...this.state.options.yAxis[1],
                // max:maxoldColumnVol
              },
              ...this.state.options.yAxis.slice(2)
            ]
          }
        })
      })
      .catch(e => console.log(e))
  }
  handleMonthButton = () => {
    clearInterval(this.state.intervalId)
    this.getMonthData()
    let intervalId = setInterval(this.getMonthData, 604800000 )
    this.setState({ intervalId })
  }
  getMonthData = () => {
    let url = `https://min-api.cryptocompare.com/data/v2/histohour?aggregate=1&e=CCCAGG&extraParams=https:%2F%2Fwww.cryptocompare.com&fsym=BTC&limit=726&tryConversion=false&tsym=USD&api_key=19f6ab549381046870ae7932ef6224e1e11266bd4dad353ef9a8abc930da70f6`
    fetch(url)
      .then(response => response.json())
      .then(historicalDataMonth => {
          console.log(historicalDataMonth)
        let newHistoricalData = historicalDataMonth.Data.Data
        console.log('newHistoricalData', historicalDataMonth)

        let columnData = []
        let areaData = []

        let minOld = newHistoricalData[0].close
        let maxOld = newHistoricalData[0].close
        let maxoldColumnVol= newHistoricalData[0].volumefrom
        for (let i = 0; i < newHistoricalData.length; i++) {

          if (newHistoricalData[i].close < minOld) {
            minOld = newHistoricalData[i].close
          }
          if (newHistoricalData[i].close > maxOld) {
            maxOld = newHistoricalData[i].close
          }
          if (newHistoricalData[i].volumefrom > maxoldColumnVol) {
            maxoldColumnVol = newHistoricalData[i].volumefrom
          }
          areaData.push([
            newHistoricalData[i].time * 1000,
            newHistoricalData[i].close
          ])
          var d = new Date(newHistoricalData[i].time * 1000)
          console.log('monthly value',newHistoricalData[i].volumefrom)
          console.log('date value',d)

          columnData.push([
            newHistoricalData[i].time * 1000,
            newHistoricalData[i].volumefrom
          ])
        }
        console.log('monthly mx value',maxoldColumnVol)
        let series = []
        series.push({
          type: 'area',
          name: 'CCCAGG Bitcoin Price',
          data: areaData,
          color: '#e8eef4'
        })
        series.push({
          type: 'column',
          yAxis: 1,
          name: 'Volume To',
          data: columnData,
          color: '#457dac'
        })

        this.setState({
          isButtonClicked: 'month',
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
              },{
                ...this.state.options.yAxis[1],
                // max:maxoldColumnVol
              },
              ...this.state.options.yAxis.slice(2)
            ]
          }
        })
      })
      .catch(e => console.log(e))
  }
  render () {
    return (
      <div className=' '>
        <div className='coin-chart-section'>
          {' '}
          <span className=' '>OVERVIEW</span>
        </div>
        <div className='coin-detail-chart-contn '>
        
          <div className='p-2 border-gray'>
          <div><span className='chart-heading'>Latest Bitcoin (BTC) - USD Historical Price Chart</span></div>
            <div className='highchart'>
              <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={this.state.options}
              />
            </div>
            <div className='btn-chart-group'>
              <button
                // type='button'
                onClick={this.handleHourButton}
                className={`px-2 btn-left-corners-graph ${
                  this.state.isButtonClicked === 'hour'
                    ? 'btn-selected'
                    : 'btn-graph'
                }`}
              >
                1 Hour
              </button>
              <button
                // type='button'
                onClick={this.handleDayButton}
                className={`px-2 btn-middle-graph ${
                  this.state.isButtonClicked === 'day'
                    ? 'btn-selected'
                    : 'btn-graph'
                }`}
              >
                1 Day
              </button>
              <button
                // type='button'
                onClick={this.handleWeekButton}
                className={`px-2 btn-middle-graph ${
                  this.state.isButtonClicked === 'week'
                    ? 'btn-selected'
                    : 'btn-graph'
                }`}
              >
                1 Week
              </button>
              <button
                // type='button'
                onClick={this.handleMonthButton}
                className={`px-2 btn-right-corners-graph ${
                  this.state.isButtonClicked === 'month'
                    ? 'btn-selected'
                    : 'btn-graph'
                }`}
              >
                1 Month
              </button>
            </div>
          </div>
          <CoinDetail />
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
