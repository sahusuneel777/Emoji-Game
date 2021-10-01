// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {currentScore, onClickPlayAgain, isWin} = props

  const resultImage = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = isWin ? 'You Won' : 'You Lose'
  const status = isWin ? 'Best Score' : 'Score'

  return (
    <div className="results-card">
      <div>
        <h1 className="result">{result}</h1>
        <p className="best-score">{status}</p>
        <p className="score">{currentScore}/12</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="playAgain-button"
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={resultImage} className="result-image" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
