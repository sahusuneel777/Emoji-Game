// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emojiCard-container">
      <button type="button" className="img-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} className="emoji" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
