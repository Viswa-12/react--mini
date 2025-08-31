import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {properties, verifyEmoji} = this.props
    const {emojiName, emojiUrl, id} = properties
    return (
      <li className="emojiContainer">
        <button className="cardBtn" onClick={() => verifyEmoji(id)}>
          <img className="emojiImg" src={emojiUrl} alt={emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
