import React from "react"

function InningsDisplay({data}) {


    return (
        <div>  
            <tr>
                    <td>{data.playerOneBallCount}</td>
                    <td>{data.inningCount}</td>
                    <td>{data.deadBallCount}</td>
                    <td>{data.playerTwoBallCount}</td>
            </tr>
        </div>
    )

}

export default InningsDisplay