// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {properties, onchangeTab, special} = this.props
    const applySpecial = special ? 'special' : 'normal'
    const {tabId, displayText} = properties
    return (
      <li className={applySpecial} onClick={() => onchangeTab(tabId)}>
        <button className="button" type="button">
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
