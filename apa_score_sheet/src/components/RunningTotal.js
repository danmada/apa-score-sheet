import InningsDisplay from "./InningsDisplay"
import CountTotals from "./CountTotals"

function RunningTotal({completedInnings, playerOneSkill, playerTwoSkill}) {

const innings = completedInnings.map((data) => {
    return <InningsDisplay data={data}/>
    })


    return (
        <>
        <h1>Running Total</h1>
        <table>
            <thead>
            <tr>
                <th>Player 1 Ball Count</th>
                <th>Innings</th>
                <th>Dead Balls</th>
                <th>Player 2 Ball Count</th>
            </tr>
            </thead>
            {innings}
            <CountTotals completedInnings={completedInnings} playerOneSkill={playerOneSkill} playerTwoSkill={playerTwoSkill} />
        </table>
        </>
    )
}
export default RunningTotal