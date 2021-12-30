import '../App.css';
import React, { useState } from "react"
import PlayerInfo from './PlayerInfo';
import NewRack from './NewRack';
import RunningTotal from './RunningTotal';

function App() {
  const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')
  const [playerOneSkill, setPlayerOneSkill] = useState('')
  const [playerTwoSkill, setPlayerTwoSkill] = useState('')
  const ballCount = [14, 19, 25, 31, 38, 46, 55, 65, 75]
  const [playerOneBallCount, setPlayerOneBallCount] = useState(0)
  const [playerTwoBallCount, setPlayerTwoBallCount] = useState(0)
  const [inningCount, setInningCount] = useState(0)
  const [deadBallCount, setDeadBallCount] = useState(0)
  const [completedInnings, setCompletedInnings] = useState([])

  const currentRack = {playerOneBallCount, inningCount, deadBallCount, playerTwoBallCount}

  function handleEndRackClick() {
    if ((playerOneBallCount + playerTwoBallCount + deadBallCount) !== 10) {
      alert('Total ball count needs to equal 10!')
    } else {
    setCompletedInnings((completedInnings) => [...completedInnings, currentRack ])

    setPlayerOneBallCount(0)
    setPlayerTwoBallCount(0)
    setInningCount(0)
    setDeadBallCount(0)
    }
  }


  return (
    <div className="App">
      <PlayerInfo 
                  setPlayerOne={setPlayerOne} 
                  playerOne={playerOne} 
                  setPlayerTwo={setPlayerTwo} 
                  playerTwo={playerTwo}
                  playerOneSkill={playerOneSkill}
                  playerTwoSkill={playerTwoSkill} 
                  setPlayerOneSkill={setPlayerOneSkill}
                  setPlayerTwoSkill={setPlayerTwoSkill}
                  ballCount={ballCount}
                  />
      <NewRack 
                  playerOneBallCount={playerOneBallCount}
                  playerTwoBallCount={playerTwoBallCount}
                  inningCount={inningCount}
                  deadBallCount={deadBallCount}
                  setPlayerOneBallCount={setPlayerOneBallCount}
                  setPlayerTwoBallCount={setPlayerTwoBallCount}
                  setInningCount={setInningCount}
                  setDeadBallCount={setDeadBallCount}
                  handleEndRackClick={handleEndRackClick}
      />
      <RunningTotal 
                  completedInnings={completedInnings}
                  playerOneSkill={playerOneSkill}
                  playerTwoSkill={playerTwoSkill}
                  playerOneBallCount={playerOneBallCount}
                  playerTwoBallCount={playerTwoBallCount}
                  ballCount={ballCount}
      />
    </div>
  );
}

export default App;
