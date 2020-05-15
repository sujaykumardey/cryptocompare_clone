import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class CoinListTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgColor: "grey"
    }
  }
  sendMessage = () => {
    const { websocket } = this.props // websocket instance passed as props to the child component.

    try {
      var subRequest = {
        "action": "SubAdd",
        "subs": ["5~CCCAGG~ETH~USD"]
      };
      websocket.send(JSON.stringify(subRequest)) //send data to the server
    } catch (error) {
      console.log(error) // catch error
    }
  }
  render() {
    console.log(this.props.data, "child")
    return (
      <div className="coinListTable">
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              {/* <th>Direct Vol</th> */}
              <th>Total Vol</th>
              <th>Top Tier Vol</th>
              <th>Mkt. Cap.</th>
            </tr>
          </thead>
          <tbody>
             {this.props.data.map((coin,index)=>
               <tr>
               <td>{index+1}</td>
               <td>{coin.sym}</td>
               <td>{coin.price}</td>
               <td>{coin.vol*coin.price}</td>
               <td>{coin.topTierVol*coin.price}</td>
             </tr>
             )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CoinListTable;