// Write your code here
import {Component} from 'react'
import './index.css'

class RepositoryItem extends Component {
  render() {
    const {properties} = this.props
    const {avatarUrl, forksCount, issuesCount, name, starsCount} = properties
    return (
      <li className="itemContainer">
        <img className="cardImg" alt={name} src={avatarUrl} />
        <h1 className="itemName">{name}</h1>

        <p className="starsCount">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="indicatorImg"
          />
          {starsCount} stars
        </p>
        <p className="forksCount">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="indicatorImg"
          />
          {forksCount} forks
        </p>
        <p className="issuesCount">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="indicatorImg"
          />
          {issuesCount} open issues
        </p>
      </li>
    )
  }
}

export default RepositoryItem
