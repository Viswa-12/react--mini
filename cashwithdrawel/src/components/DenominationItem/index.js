// Write your code here
import {Component} from 'react'
// import './index.css'

class DenominationItem extends Component {
  render() {
    const {value, onClick} = this.props
    return (
      <li className="listItem">
        <button type="button" className="button" onClick={() => onClick(value)}>
          {value}
        </button>
      </li>
    )
  }
}
export default DenominationItem
