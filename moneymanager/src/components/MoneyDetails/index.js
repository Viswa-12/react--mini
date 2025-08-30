// Write your code here
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {balance, income, expenses} = this.props
    return (
      <div className="secondBoxInner">
        <div className="displayCard dCard1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="displayCardImg"
          />
          <div>
            <p className="displayCardtype">Your Balance</p>
            <p className="displayCardAmount" data-testid="balanceAmount">
              Rs {balance}
            </p>
          </div>
        </div>
        <div className="displayCard dCard2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="displayCardImg"
          />
          <div>
            <p className="displayCardtype">Your Income</p>
            <p className="displayCardAmount" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </div>
        <div className="displayCard dCard3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="displayCardImg"
          />
          <div>
            <p className="displayCardtype">Your Expenses</p>
            <p className="displayCardAmount" data-testid="expensesAmount">
              Rs {expenses}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyDetails
