// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }

  reduceAmount = value => {
    const {amount}=this.state
        this.setState(prevstate => ({
      amount: value<amount?amount-value:amount,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="container">
        <div className="cardContainer">
          <div className="container1">
            <p className="logo">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="container2">
            <p className="con2para common">Your Balance</p>
            <div className="innerdiv">
              <p className="amount">{amount}</p>
              <p className="innerdivpara common">In Rupees</p>
            </div>
          </div>

          <div className="container3">
            <p className="con3heading">Withdraw</p>
            <p className="con3para common">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul className="container4">
            {denominationsList.map(item => (
              <DenominationItem
                key={item.id}
                value={item.value}
                onClick={this.reduceAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
