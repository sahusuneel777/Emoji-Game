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
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const currentScore = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishEmojiGame(currentScore)
    } else {
      if (emojisList.length - 1 === currentScore) {
        this.finishEmojiGame(emojisList.length)
      }
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

    return (
      <>
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
    const isWin = clickedEmojisList.length === emojisList.length
    console.log(isWin)
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
    console.log(`High:${HighScore}`)
    console.log(`Current:${clickedEmojisList.length}`)

    return (
      <div className="app-container">
        <NavBar
          isGameIsOn={isGameIsOn}
          currentScore={clickedEmojisList.length}
          HighScore={HighScore}
        />
        <div className="emojees-list">
          {isGameIsOn ? this.toRenderEmojiList() : this.toRenderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
