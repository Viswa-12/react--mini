import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isOvered: false,
    clickedEmojisList: [],
  }

  verifyEmoji = id => {
    const {clickedEmojisList, isOvered, score, topScore} = this.state
    const emojiIndex = clickedEmojisList.indexOf(id)
    if (emojiIndex === -1) {
      if (clickedEmojisList.length === 11) {
        const newTopScore = topScore < score + 1 ? score + 1 : topScore
        this.setState(prevState => ({
          score: prevState.score + 1,
          topScore: newTopScore,
          isOvered: true,
          clickedEmojisList: [...prevState.clickedEmojisList, id],
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          clickedEmojisList: [...prevState.clickedEmojisList, id],
        }))
      }
    } else {
      const newTopScore = topScore < score ? score : topScore
      this.setState({topScore: newTopScore, isOvered: true})
    }
  }

  resetGame = () => {
    this.setState({score: 0, isOvered: false, clickedEmojisList: []})
  }

  render() {
    const {score, topScore, isOvered} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    return (
      <div className="emojiGameContainer">
        <NavBar score={score} topScore={topScore} isOvered={isOvered} />
        {!isOvered && (
          <ul className="emojisList">
            {shuffledEmojisList.map(eachrow => (
              <EmojiCard
                properties={eachrow}
                key={eachrow.id}
                verifyEmoji={this.verifyEmoji}
              />
            ))}
          </ul>
        )}
        {isOvered && <WinOrLoseCard score={score} resetGame={this.resetGame} />}
      </div>
    )
  }
}

export default EmojiGame
