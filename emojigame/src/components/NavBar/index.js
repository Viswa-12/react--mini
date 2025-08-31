import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, isOvered} = this.props
    return (
      <div className="navbarContainer">
        <div className="navbarLeftContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="navbarLogo"
          />
          <h1 className="gameTitle">Emoji Game</h1>
        </div>
        {!isOvered && (
          <div className="scoresContainer">
            <p className="scoreItem">Score: {score}</p>
            <p className="scoreItem">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    )
  }
}

export default NavBar
