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

  


  return (
    <div className="App">
      <PlayerInfo setPlayerOne={setPlayerOne} 
                  playerOne={playerOne} 
                  setPlayerTwo={setPlayerTwo} 
                  playerTwo={playerTwo}
                  playerOneSkill={playerOneSkill}
                  playerTwoSkill={playerTwoSkill} 
                  setPlayerOneSkill={setPlayerOneSkill}
                  setPlayerTwoSkill={setPlayerTwoSkill}
                  ballCount={ballCount}
                  />
      <NewRack />
      <RunningTotal />
    </div>
  );
}

export default App;
