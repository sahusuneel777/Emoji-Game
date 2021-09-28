import {Component} from 'react'
import NavBar from '../NavBar'
import EmjoiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    HighScore: 0,
    isGameIsOn: true,
  }

  finishEmojiGame = currentScore => {
    const {HighScore} = this.state
    let newHighScore = HighScore

    if (newHighScore < currentScore) {
      newHighScore = currentScore
    }

    this.setState({HighScore: newHighScore, isGameIsOn: false})
  }

  clickEmoji = id => {
    // const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const currentScore = clickedEmojisList.length
    // console.log(currentScore)
    if (isEmojiPresent) {
      this.finishEmojiGame(currentScore)
    } else {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  toRenderEmojiList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {clickedEmojisList, HighScore} = this.state

    return (
      <>
        <NavBar currentScore={clickedEmojisList.length} HighScore={HighScore} />
        <ul className="emoji-list-container">
          {shuffledEmojisList.map(eachEmoji => (
            <EmjoiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              clickEmoji={this.clickEmoji}
            />
          ))}
        </ul>
      </>
    )
  }

  reset = () => {
    this.setState({clickedEmojisList: [], isGameIsOn: true})
  }

  toRenderScoreCard = () => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    console.log(`c:${clickedEmojisList.length}`)
    const isWin = clickedEmojisList.length === emojisList.length
    return (
      <WinOrLoseCard
        currentScore={clickedEmojisList.length}
        onClickPlayAgain={this.reset}
        isWin={isWin}
      />
    )
  }

  render() {
    // const {emojisList} = this.props
    const {isGameIsOn, clickedEmojisList, HighScore} = this.state
    console.log(`H:${HighScore}`)

    return (
      <div className="app-container">
        <div className="emojees-list">
          {isGameIsOn ? this.toRenderEmojiList() : this.toRenderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
