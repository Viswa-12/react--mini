import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  renderPlayAgainBtn = () => {
    const {resetGame} = this.props
    return (
      <button className="resetBtn" type="button" onClick={resetGame}>
        Play Again
      </button>
    )
  }

  renderSuccessView = score => (
    <div className="innerCardContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        className="winOrLoseCardImg"
        alt="win or lose"
      />
      <h1>You Won</h1>
      <p>Best Score</p>
      <p>{score}/12</p>
      {this.renderPlayAgainBtn()}
    </div>
  )

  renderFailureView = score => (
    <div className="innerCardContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        className="winOrLoseCardImg"
        alt="win or lose"
      />
      <h1>You Lose</h1>
      <p>Score</p>
      <p>{score}/12</p>
      {this.renderPlayAgainBtn()}
    </div>
  )

  render() {
    const {score} = this.props
    return (
      <div className="WinorLoseContainer">
        {score < 12 && this.renderFailureView(score)}
        {score === 12 && this.renderSuccessView(score)}
      </div>
    )
  }
}

export default WinOrLoseCard
