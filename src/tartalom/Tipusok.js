import tipus from "./tipusok.json";

function Tipusok() {
    return (
        <div id="fo">
            <h1>Apple Iphone mobilok</h1>
            <h2>...egy kis ismertető...</h2>
            <table id="tipik">
                <tbody>
                    <tr>
                        <th>Típus:</th>
                        <th>Tárhely:</th>
                        <th>Hálózat:</th>
                        <th>Szín:</th>
                    </tr>
                    {tipus.map((elem, index) => (<tr key={index}><td>{elem.tipus}</td><td>{elem.tarhely} GB</td><td>{elem.halozat}</td><td>{elem.szin}</td></tr>))}
                </tbody>
            </table>
            <div id='footer'><hr></hr><p>Készítette: Rékási László</p></div>


        </div>



    )
}

export default Tipusok;