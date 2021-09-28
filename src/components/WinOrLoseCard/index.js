// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {currentScore, onClickPlayAgain, isWin} = props

  const resultImage = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/loss-game-img.png'

  const result = isWin ? 'Won' : 'Loss'
  const status = isWin ? 'Best Score' : 'Score'
  console.log(currentScore)
  console.log(resultImage)
  return (
    <div className="results-card">
      <div>
        <h1 className="result">You {result}</h1>
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
