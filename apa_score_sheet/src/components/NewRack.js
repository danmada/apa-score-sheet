


function NewRack({  playerOneBallCount,
                    playerTwoBallCount,
                    setPlayerOneBallCount,
                    setPlayerTwoBallCount,
                    inningCount,
                    setInningCount,
                    deadBallCount,
                    setDeadBallCount,
                    handleEndRackClick
}) {

   const handleAddP1BallCount = () => setPlayerOneBallCount(playerOneBallCount + 1);
   const handleSubP1BallCount = () => setPlayerOneBallCount(playerOneBallCount - 1);

   const handleAddP2BallCount = () => setPlayerTwoBallCount(playerTwoBallCount + 1);
   const handleSubP2BallCount = () => setPlayerTwoBallCount(playerTwoBallCount - 1);

   const handleInningAddCount = () => setInningCount(inningCount + 1);
   const handleInningSubCount = () => setInningCount(inningCount - 1);

   const handleAddDeadBallCount = () => setDeadBallCount(deadBallCount + 1);
   const handleSubDeadBallCount = () => setDeadBallCount(deadBallCount - 1);


    return (
        <>
        <h1>Current Rack</h1>
        <table>
            <thead>
                <tr>
                    <th>Ball Count</th>
                    <th>Innings</th>
                    <th>Dead Balls</th>
                    <th>Ball Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{playerOneBallCount}</td>
                    <td>{inningCount}</td>
                    <td>{deadBallCount}</td>
                    <td>{playerTwoBallCount}</td>
                </tr>
                <tr>
                    <td>
                        <button onClick={handleAddP1BallCount}>+</button>
                        <button onClick={handleSubP1BallCount}>-</button>
                    </td>
                    <td>
                        <button onClick={handleInningAddCount}>+</button>
                        <button onClick={handleInningSubCount}>-</button>
                    </td>
                    <td>
                        <button onClick={handleAddDeadBallCount}>+</button>
                        <button onClick={handleSubDeadBallCount}>-</button>
                    </td>
                    <td>
                        <button onClick={handleAddP2BallCount}>+</button>
                        <button onClick={handleSubP2BallCount}>-</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button onClick={handleEndRackClick}>End Rack</button>
        </>
    )
}

export default NewRack