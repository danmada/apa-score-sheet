import React, { useState } from "react"

function PlayerInfo({ 
                ballCount, 
                playerOne, 
                setPlayerOne, 
                playerTwo, 
                setPlayerTwo, 
                setPlayerOneSkill, 
                setPlayerTwoSkill, 
                playerOneSkill, 
                playerTwoSkill 
        }) {

const [toggleSetInfo, setToggleSetInfo] = useState(true)


function handleSetButton() {
    setToggleSetInfo(!toggleSetInfo)
}

function getBallCount(skill) {
    for (let i = 0; i < ballCount.length; i++) {
        const skillLvl = Object.values(skill)
        if ((i + 1) === parseInt(skillLvl[0])) {
            return ballCount[i]
        }
    }
}

    
    return (
        <>
        <h1 data-testid="header">Player Info</h1>
        { toggleSetInfo ?
        <div>
            <form>
                <label htmlFor="player-one-name"> Player 1: </label>
                <input 
                    data-testid="input"
                    type="text" 
                    placeholder="Player 1 Name" 
                    value={playerOne} 
                    onChange={(e) => {
                        setPlayerOne(e.target.value)
                    }}
                />
                <label htmlFor="skill-level">Skill Level: </label>
                    <select id="skill-level" name="skilllevel" onChange={(e) => setPlayerOneSkill(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    </select>
                <label>Player 2: </label>
                <input type="text" placeholder="Player 2 Name" value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)}/>
                <label>Skill Level: </label>
                    <select id="skilllevel" name="skilllevel" onChange={(e) => setPlayerTwoSkill(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    </select>
            </form>
            <button onClick={handleSetButton}>Set Player Info</button>
        </div>
            :
        <table>
            <thead>
                <tr>
                    <th>Player 1</th>
                    <th>Skill Level</th>
                    <th>Ball Count</th>
                    <th>Player 2</th>
                    <th>Skill Level</th>
                    <th>Ball Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{playerOne}</td>
                    <td>{playerOneSkill}</td>
                    <td>{getBallCount({playerOneSkill})}</td>
                    <td>{playerTwo}</td>
                    <td>{playerTwoSkill}</td>
                    <td>{getBallCount({playerTwoSkill})}</td>
                </tr>
            </tbody>
        </table>
        }
        </>
    )
}

export default PlayerInfo