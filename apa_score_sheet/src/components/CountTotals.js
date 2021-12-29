function CountTotals({completedInnings, playerOneSkill, playerTwoSkill}) {

    let player1Total = 0;
    let player2Total = 0;
    let inningsTotal = 0;


    for (let i = 0; i < completedInnings.length; i++) {
        player1Total += completedInnings[i].playerOneBallCount;
        player2Total += completedInnings[i].playerTwoBallCount;
        inningsTotal += completedInnings[i].inningCount;
        }

   
    return (
        <tbody> 
        <tr>
                <td>{player1Total}</td>
                <td>{inningsTotal}</td>
                <td></td>
                <td>{player2Total}</td>
        </tr>
        </tbody>
    )
}

export default CountTotals