import React, { Component } from 'react'
const CoinMarketDetail = props => {
  const tooltipRatingTitle = `This rating is powered by Weiss Crypto Ratings. To find out more see the rating tab below, values range from A+ to F-.`
  const tooltipTitleMktCap = `When calculating Market Capitalization (market cap), we account for all coins in circulation, including those held by team members or the company.
    This also includes coins in smart contracts or escrow. If the coins have been issued and have not been burned, they will be accounted for in the market cap.`
  const getVolume = message => {
    let volume = message.VOLUME24HOURTO / 1000000
    let bitcoinVol = message.VOLUME24HOURTO / message.PRICE / 1000
    
    return (
      <div className='coin-market-border px-1'>
        Ƀ {bitcoinVol.toFixed(2)}k ($ {volume.toFixed(2)} M)
      </div>
    )
  }
  return (
    <div className='d-flex mb-3'>
      {/* <div className=' pr-2'>
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
      </div> */}
      <div className='pr-2'>
        <div className='badge text-secondary'>Vol. 24H</div>
        {getVolume(props.response)}
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
        <div className='badge text-secondary coin-market-rating-div'>
          Weiss Rating
          <i
            class='fa fa-info-circle coin-market-info'
            
          >
              <div className='tooltip-content'>
          
          {`${tooltipRatingTitle}`}
          </div>
          </i>
          
        </div>
        <div className='text-center coin-market-border'>A-</div>
      </div>
    </div>
  )
}
class CoinName extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ws: null,
      message: [],
      prevMessage: []
    }
  }

  componentDidMount () {
    this.connect()
  }

  timeout = 250 // Initial timeout duration as a class variable

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
    // var apiKey = "19f6ab549381046870ae7932ef6224e1e11266bd4dad353ef9a8abc930da70f6";
    var apiKey1 =
      'eec68ff1508c800d201f19741c1a920f4e1fe97510f96090818c3ce2e5f4e61f'

    var ws = new WebSocket(
      'wss://streamer.cryptocompare.com/v2?api_key=' + apiKey1
    )
    let that = this // cache the this
    var connectInterval

    // websocket onopen event listener
    ws.onopen = () => {
      console.log('connected websocket main component')

      this.setState({ ws: ws })
      var subRequest = {
        action: 'SubAdd',
        subs: ['5~CCCAGG~BTC~USD']
      }
      ws.send(JSON.stringify(subRequest))
      that.timeout = 250 // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval) // clear Interval on on open of websocket connection
    }

    // websocket onclose event listener
    ws.onclose = e => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} second.`,
        e.reason
      )

      that.timeout = that.timeout + that.timeout //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)) //call check function after timeout
    }

    ws.onmessage = event => {
      // console.log(event)
      const message = JSON.parse(event.data)
      // this.setState({...this.state,message})
      if(message.PRICE !== undefined){
        this.setState(
            prevState => {
              return {
                ...this.state,
                message: message,
                prevMessage: prevState.message
              }
            }
            // ,()=> console.log(this.state)
          )
      }
      
      // console.log(message)
    //   console.log(message.PRICE)
      // let volume24hour=message.VOLUME24HOURTO

      // console.log("Received from Cryptocompare: " + message);
    }
    // websocket onerror event listener
    ws.onerror = err => {
      console.error('Socket encountered error: ', err.message, 'Closing socket')

      ws.close()
    }
  }

  check = () => {
    const { ws } = this.state
    if (!ws || ws.readyState == WebSocket.CLOSED) this.connect() //check if websocket instance is closed, if so call `connect` function.
  }

  getPrice = message => {
    let oldPrice = this.state.prevMessage.PRICE
    if (message.PRICE === undefined) {
      return (
        <div className='pl-2  coin-price-style'>
          <p>$ {oldPrice}</p>
        </div>
      )
    }
    if (message.PRICE !== undefined) {
      if (oldPrice > message.PRICE) {
        return (
          <div className='pl-2  price-dec coin-price-style'>
            <span>$ {message.PRICE}</span>
          </div>
        )
      } else if (oldPrice < message.PRICE) {
        return (
          <div className='pl-2   price-inc coin-price-style'>
            <span>$ {message.PRICE}</span>
          </div>
        )
      } else {
        return (
          <div className='  pl-2 price-same coin-price-style'>
            <span>$ {message.PRICE}</span>
          </div>
        )
      }
    } 
    // else {
    //   return (
    //     <div className='pl-2  coin-price-style'>
    //       <p>$ {oldPrice}</p>
    //     </div>
    //   )
    // }
  }
  render () {
    return (
      <div>
        <div className='d-flex'>
          {/* <div class='dropdown'>
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
          </div> */}
          {this.getPrice(this.state.message)}

          {/* <div className=' price-change-caret pl-4'>
            <i class='fas fa-caret-up pl-2 fa-3x'></i>
            <div className=''>2.56%</div>
          </div> */}
        </div>
        <CoinMarketDetail response={this.state.message} />
      </div>
    )
  }
}

export default CoinName
