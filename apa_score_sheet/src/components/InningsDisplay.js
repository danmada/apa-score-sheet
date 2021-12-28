function InningsDisplay({data}) {


    return (
        
            <tbody> 
            <tr>
                    <td>{data.playerOneBallCount}</td>
                    <td>{data.inningCount}</td>
                    <td>{data.deadBallCount}</td>
                    <td>{data.playerTwoBallCount}</td>
            </tr>
            </tbody>
    
    )

}

export default InningsDisplay