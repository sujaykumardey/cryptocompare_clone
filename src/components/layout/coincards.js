import React, { Component } from 'react';
import { connect } from 'react-redux';
import {onDeleteCoin} from '../../actions/postActions'
import './coincards.css'


class Coincards extends Component {

  constructor(props){
    super(props);
    this.state={
      coin_price:null,
      percent:null
    }
  }

componentDidMount(){
}




deleteItem=(e)=>{
   e.preventDefault();
    // this.props.onDeleteCoin(e.target.id,this.props.token);
    this.props.onDeleteCoin(e.target.id);
    console.log('tokentoken',e.target.id)

}


    render() {
        const result=this.props.coin===undefined ? null :
        this.props.coin.map(e=>
            <tbody>
            <tr>
              <th scope="row" id={e._id} className="row-header d-flex justify-content-lg-between">Bitcoin {e.coin} <i class="fas fa-trash" id={e._id} name={e.coin}  onClick={(e)=>this.deleteItem(e)}></i></th>
              <td>$ {e.price}</td>
              <td> <span className="coin_price">${this.props.price}</span></td>
              <td><span className="coin_price">${this.props.price}</span></td>
              <td><span className="coin_price">{(this.props.price*100).toFixed(2)}</span>%</td>

            </tr>
          </tbody>
        )
        return (
            <div>
                  <div className="table-container">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col"># Coin/Date</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total Value</th>
                    <th scope="col">Profit/Loss</th>
                    <th scope="col">Change</th>
                  </tr>
                </thead>
               {result}
              </table>
            </div>
            </div>
        );
    }
}




const mapStateToProps = (state) => ({
    
    token:state.crypto.users.token,
  });
  
  
  export default connect(mapStateToProps,{
    onDeleteCoin
  })(Coincards);