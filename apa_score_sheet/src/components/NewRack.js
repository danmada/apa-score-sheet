


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


    function handleP1BallCount(){
        setPlayerOneBallCount(playerOneBallCount + 1)
    }

    function handleP2BallCount(){
        setPlayerTwoBallCount(playerTwoBallCount + 1)
    }

    function handleInningCount(){
        setInningCount(inningCount + 1)
    }

    function handleDeadBallCount(){
        setDeadBallCount(deadBallCount + 1)
    }
    

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
                    <td onClick={handleP1BallCount}>{playerOneBallCount}</td>
                    <td onClick={handleInningCount}>{inningCount}</td>
                    <td onClick={handleDeadBallCount}>{deadBallCount}</td>
                    <td onClick={handleP2BallCount}>{playerTwoBallCount}</td>
                </tr>
            </tbody>
        </table>
        <button onClick={handleEndRackClick}>End Rack</button>
        </>
    )
}

export default NewRack