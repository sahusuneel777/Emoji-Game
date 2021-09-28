// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, HighScore} = props
  // console.log(currentScore)

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-title">Emoji Game</h1>
      </div>

      <div className="score-container">
        <p className="score">Score: {currentScore}</p>
        <p className="score">Top Score: {HighScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
