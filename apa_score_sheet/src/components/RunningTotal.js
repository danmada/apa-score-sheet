import InningsDisplay from "./InningsDisplay"
import CountTotals from "./CountTotals"
import styled from "styled-components";

function RunningTotal({completedInnings, ballCount, playerOneSkill, playerTwoSkill, playerOneBallCount, playerTwoBallCount}) {

const innings = completedInnings.map((data) => {
    return <InningsDisplay data={data}/>
    })


    return (
        <MainDiv>
        <Header>Running Total</Header>
        <SetTable>
            <TableHead>
            <tr>
                <th>Player 1 Ball Count</th>
                <th>Innings</th>
                <th>Dead Balls</th>
                <th>Player 2 Ball Count</th>
            </tr>
            </TableHead>
            {innings}
            <CountTotals 
                    completedInnings={completedInnings} 
                    playerOneSkill={playerOneSkill} 
                    playerTwoSkill={playerTwoSkill}
                    playerOneBallCount={playerOneBallCount}
                    playerTwoBallCount={playerTwoBallCount}
                    ballCount={ballCount} 
            />
        </SetTable>
        </MainDiv>
    )
} 
export default RunningTotal

//styled components

const MainDiv = styled.div`
color: #2A2A72;
`
const Header = styled.h1`
background-color: #D1603D;
`
const SetTable = styled.table`
padding-left: 10%;
`
const TableHead = styled.thead`
border-bottom: 5px solid red;
`