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
    setCompletedInnings((completedInnings) => [...completedInnings, currentRack ])
  }

  console.log(completedInnings)

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
      <RunningTotal completedInnings={completedInnings}/>
    </div>
  );
}

export default App;
