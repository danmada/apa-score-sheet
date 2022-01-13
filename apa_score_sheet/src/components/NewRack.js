import styled from "styled-components";


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
        <MainDiv>
        <Header>Current Rack</Header>
        <SetTable>
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
        </SetTable>
        <button onClick={handleEndRackClick}>End Rack</button>
        </MainDiv>
    )
}

export default NewRack

///// styled components 

const MainDiv = styled.div`
color: #2A2A72;
`
const SetTable = styled.table`
padding-left: 10%;
`
const Header = styled.h1`
background-color: #D1603D;
`
const DataCell = styled.td`
padding-right: 5pt;
`