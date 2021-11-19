function NewRack() {

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
                    <td>9</td>
                    <td>6</td>
                    <td>0</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
        <button>End Rack</button>
        </>
    )
}

export default NewRack