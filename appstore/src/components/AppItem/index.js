// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {properties} = this.props
    const {imageUrl, appName} = properties
    return (
      <li className="appItem">
        <img src={imageUrl} className="appImg" alt={appName} />
        <p className="appName">{appName}</p>
      </li>
    )
  }
}

export default AppItem
