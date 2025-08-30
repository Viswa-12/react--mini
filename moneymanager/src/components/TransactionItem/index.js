import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  render() {
    const {onClick, properties} = this.props
    const {titleInput, amount, type, displayText, id} = properties
    return (
      <li className="listItem">
        <p className="item item1">{titleInput}</p>
        <p className="item item2">{amount}</p>
        <p className="item item3">{displayText}</p>
        <button
          type="button"
          className="deleteButton item4"
          data-testid="delete"
          onClick={() => onClick(id, type, amount)}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete icon"
            className="deleteIcon"
          />
        </button>
      </li>
    )
  }
}
export default TransactionItem
