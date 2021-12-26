import InningsDisplay from "./InningsDisplay"

function RunningTotal({completedInnings}) {

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
                <th>Player 1 Ball Count</th>
            </tr>
            {innings}
            </thead>
        </table>
        </>
    )
}
export default RunningTotal