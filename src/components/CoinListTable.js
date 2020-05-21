import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import numeral from "numeral"
import  NumberFormat from 'react-number-format';
class CoinListTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: "grey"
    }
  }
  moneyFormat=(labelValue)=>
                    {  
                          // Nine Zeroes for Billions
                          return Math.abs(Number(labelValue)) >= 1.0e+9

                               ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " B"
                               // Six Zeroes for Millions 
                               : Math.abs(Number(labelValue)) >= 1.0e+6

                               ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + " M"
                               // Three Zeroes for Thousands
                               : Math.abs(Number(labelValue)) >= 1.0e+3

                               ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + " K"

                               : Math.abs(Number(labelValue)).toFixed(2);
                     
                   }
  // sendMessage = () => {
  //   const { websocket } = this.props // websocket instance passed as props to the child component.

  //   try {
  //     var subRequest = {
  //       "action": "SubAdd",
  //       "subs": ["5~CCCAGG~ETH~USD"]
  //     };
  //     websocket.send(JSON.stringify(subRequest)) //send data to the server
  //   } catch (error) {
  //     console.log(error) // catch error
  //   }
  // }
  render() {
    console.log(this.props.data, "child")
    return (
      <div className="coinListTable">
        <Table responsive>
          <thead style={{borderBottom:"3px solid #00d665"}}>
            <tr className="table-coin-h">
              <th>#</th>
              <th >Coin</th>
              <th>Price</th>
              <th style={{textAlign:"end"}}>Total Vol</th>
              <th style={{textAlign:"end"}}>Top Tier Vol</th>
              <th style={{textAlign:"end"}}>Mkt. Cap.</th>
              <th>7D Chart(USD)</th>
              <th>Rating</th>
              <th>Chg. 24H</th>
            </tr>
          </thead>
          <tbody>
             {this.props.data.map((coin,index)=>
               <tr className="table-coin-t">
               <td className="index-table">{index+1}</td>
               <td style={{display:"flex",}}>
                 <div className="table-img m-1">
                   <img className="coin-img"style={{size:"20%",width:"25px",height:"26px",marginRight:"8px"}}src={"https://www.cryptocompare.com"+this.props.coinInfo[index].CoinInfo.ImageUrl} alt="coin-img"/>
                 </div>
                 <div>
                   <p className="coin-name">{this.props.coinInfo[index].CoinInfo.FullName}</p>
                   <p className="coin-fullname">{this.props.coinInfo[index].CoinInfo.Name}</p>
                 </div>
                 </td>
               <td><NumberFormat value={coin.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <button type="button" className="price-btn">{value}</button>} /></td>
               <td style={{textAlign:"end"}}><span className="dollar">$</span>{this.moneyFormat(coin.vol*coin.price/10)}</td>
               <td style={{textAlign:"end"}}><span className="dollar">$</span>{this.moneyFormat(coin.topTierVol*coin.price)}</td>
               <td style={{textAlign:"end"}}><span className="dollar">$</span>{this.moneyFormat(this.props.coinInfo[index].ConversionInfo.Supply*coin.price)}</td>
               <td>
               <img class="spark-img" src={`https://images.cryptocompare.com/sparkchart/${this.props.coinInfo[index].CoinInfo.Name}/USD/latest.png?ts=1589818800`} alt="change img"/>
               </td>
             <td>{this.props.coinInfo[index].CoinInfo.Rating.Weiss.Rating}</td>
             </tr>
             )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CoinListTable;