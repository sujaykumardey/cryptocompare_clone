import React, { Component } from 'react'
import btcimg from '../btc.png'

class CoinInfoProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFollowClicked: false,
      isHovered: false
    }
  }

  handleFollow = () => {
    this.setState(prevState => ({
      isFollowClicked: !prevState.isFollowClicked
    }))
    //   this.setState({ isFollowClicked:!this.state.FollowClicked})
  }
  toggleHover =() => {
    this.setState(prevState => ({ isHovered: !prevState.isHovered }))
  }

  render () {
    return (
      <div className='coin-info-container'>
        <div className='coin-info-image border-gray '>
          <div className='border-gray coin-short-form'>1 BTC =</div>
          <div className='coin-image text-center py-4'>
            <img src={btcimg} alt='Avatar' />
          </div>
        </div>
        <div className='text-center py-2'>
          <span className='currency-name  '>Bitcoin</span>
        </div>
        <div>
          <div>
            <button
              type='button'
              className={`w-100 mb-2 btn btn-labeled coin-follow text-white ${ (this.state.isFollowClicked && this.state.isHovered) && 'follow-hover' }`}
              onClick={this.handleFollow}
              onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
            >
              <span className='btn-label '>
              { (this.state.isFollowClicked && this.state.isHovered) ? <i className='fa fa-minus'></i> : <i
                  className={`${
                    this.state.isFollowClicked ? 'fa fa-check' : 'fa fa-plus'
                  }`}
                ></i>}
                
              </span>
              { (this.state.isFollowClicked && this.state.isHovered) ? 'Unfollow': `${this.state.isFollowClicked ? 'Following' : 'Follow'}` }
              {}
            </button>
          </div>
          <div>
            <button
              type='button'
              className=' w-100 btn btn-labeled add-to-portfolio text-white'
            >
              <span className='btn-label'>
                <i className='fa fa-home'></i>
              </span>
              + Portfolio
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinInfoProfile
