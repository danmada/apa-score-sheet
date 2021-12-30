function CountTotals({completedInnings, ballCount, playerOneSkill, playerTwoSkill, playerOneBallCount, playerTwoBallCount}) {

    let player1Total = 0;
    let player2Total = 0;
    let inningsTotal = 0;

    for (let i = 0; i < completedInnings.length; i++) {
        player1Total += completedInnings[i].playerOneBallCount;
        player2Total += completedInnings[i].playerTwoBallCount;
        inningsTotal += completedInnings[i].inningCount;
        }

        console.log(typeof playerOneBallCount)

    function getBallCount(skill) {
            for (let i = 0; i < ballCount.length; i++) {
                const skillLvl = Object.values(skill)
                if ((i + 1) === parseInt(skillLvl[0])) {
                    return ballCount[i]
                }
            }
        }
    
    function isWinner() {
        if (player1Total + playerOneBallCount === getBallCount(playerOneSkill)) {
            return <h1>Player One Wins!</h1>
        } else if (player2Total + playerTwoBallCount === getBallCount(playerTwoSkill)) {
            return <h1>Player Two Wins!</h1>
        }
    }
   
    return (
        <>
        <tbody> 
        <tr>
                <td>{player1Total}</td>
                <td>{inningsTotal}</td>
                <td></td>
                <td>{player2Total}</td>
        </tr>
        </tbody>
        <div>
        {isWinner()}
        </div>
        </>
    )
}

export default CountTotals