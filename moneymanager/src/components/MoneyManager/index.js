import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

// Transaction type options
const transactionTypeOptions = [
  {optionId: 'INCOME', displayText: 'Income'},
  {optionId: 'EXPENSES', displayText: 'Expenses'},
]

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    itemsList: [],
    titleInput: '',
    amount: '',
    type: 'INCOME',
  }

  // Handlers for inputs
  titleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: event.target.value})
  }

  selectChange = event => {
    this.setState({type: event.target.value})
  }

  // Add transaction
  addItem = event => {
    event.preventDefault()
    const {balance, income, expenses, titleInput, amount, type, itemsList} =
      this.state

    const parsedAmount = parseInt(amount)
    if (titleInput.trim() === '' || isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Please enter a valid title and positive amount!')
      return
    }

    const displayText = type === 'INCOME' ? 'Income' : 'Expenses'
    let newBalance = balance
    let newIncome = income
    let newExpenses = expenses

    if (type === 'INCOME') {
      newIncome += parsedAmount
      newBalance += parsedAmount
    } else {
      newExpenses += parsedAmount
      newBalance -= parsedAmount
    }

    const newItem = {
      id: uuidv4(),
      titleInput,
      amount: parsedAmount,
      type,
      displayText,
    }

    this.setState({
      balance: newBalance,
      income: newIncome,
      expenses: newExpenses,
      titleInput: '',
      amount: '',
      type: 'INCOME',
      itemsList: [...itemsList, newItem],
    })
  }

  // Delete transaction
  deleteItem = (itemId, type, amount) => {
    this.setState(prevState => {
      const updatedList = prevState.itemsList.filter(item => item.id !== itemId)
      const updatedAmount = parseInt(amount)

      let newIncome = prevState.income
      let newExpenses = prevState.expenses
      let newBalance = prevState.balance

      if (type === 'INCOME') {
        newIncome -= updatedAmount
        newBalance -= updatedAmount
      } else {
        newExpenses -= updatedAmount
        newBalance += updatedAmount
      }

      return {
        itemsList: updatedList,
        income: newIncome,
        expenses: newExpenses,
        balance: newBalance,
      }
    })
  }

  render() {
    const {balance, income, expenses, titleInput, amount, type, itemsList} =
      this.state

    return (
      <div className="container">
        <div className="cardContainer">
          {/* Greeting Section */}
          <div className="firstBox">
            <h1 className="heading1">Hi, Richard</h1>
            <p>
              Welcome back to your{' '}
              <span className="firstBoxSpecial">Money Manager</span>
            </p>
          </div>

          {/* Balance, Income, Expense Section */}
          <div className="secondBox">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </div>

          {/* Transaction Form and History */}
          <div className="resultContainer">
            {/* Add Transaction */}
            <div className="result1Container">
              <h1 className="result1ContainerHeading">Add Transaction</h1>
              <form className="formContainer" onSubmit={this.addItem}>
                <label htmlFor="title">TITLE</label> <br />
                <input
                  type="text"
                  placeholder="TITLE"
                  id="title"
                  value={titleInput}
                  onChange={this.titleChange}
                />
                <br />
                <label htmlFor="amount">AMOUNT</label> <br />
                <input
                  type="text"
                  placeholder="AMOUNT"
                  id="amount"
                  value={amount}
                  onChange={this.amountChange}
                />
                <br />
                <label htmlFor="type">TYPE</label> <br />
                <select value={type} onChange={this.selectChange}>
                  {transactionTypeOptions.map(option => (
                    <option key={option.optionId} value={option.optionId}>
                      {option.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button type="submit" className="submitBtn">
                  Add
                </button>
              </form>
            </div>

            {/* History Section */}
            <div className="result2Container">
              <h1 className="historyHeading">History</h1>
              <ul className="resultsContainer">
                <li className="header">
                  <p className="headerType type1">Title</p>
                  <p className="headerType type2">Amount</p>
                  <p className="headerType type3">Type</p>
                </li>
                {itemsList.map(eachItem => (
                  <TransactionItem
                    properties={eachItem}
                    key={eachItem.id}
                    onClick={() =>
                      this.deleteItem(
                        eachItem.id,
                        eachItem.type,
                        eachItem.amount,
                      )
                    }
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
