import { useState } from "react";
import Adat from "./keszulek.json";

function Adatbeker() {
    const [adat, setAdat] = useState({});
    const [tipus, setTipus] = useState(null);
    const [tarterulet, setTarterulet] = useState(null);
    const [halozat, setHalozat] = useState(null);
    const [magassag, setMagassag] = useState(null);
    const [szelesseg, setSzelesseg] = useState(null);
    const [vastagsag, setVastagsag] = useState(null);

    const send = () => {
        setAdat(Adat.push({ tipus: tipus, tarterulet: tarterulet, halozat: halozat, magassag: magassag, szelesseg: szelesseg, vastagsag: vastagsag }));
    };

    function torol(i) {
        setAdat(Adat.splice(i, 1))
    };

    function meretes(item) {
        if (item.tarterulet > 128)
            return "nagy";
        else {
            return "kicsi";

        }
    }

    function terulet(magassag, szelesseg) {
        let terulet = magassag * szelesseg;
        return terulet;
    }

    function terfogat(magassag, szelesseg, vastagsag) {
        let terfogat = magassag * szelesseg * vastagsag;
        return terfogat;
    }

    
    return (
        <div id="fo">
            <h1>Apple Iphone mobilok</h1>
            <h2>...egy kis ismertető...</h2>

            <div id="beker">
                <label>Készülék típus:</label><select id="tipus" type="text" onChange={(e) => (setTipus(e.target.value))}>
                    <option value="">Válassz!</option>
                    <option value="Apple Iphone X">Apple Iphone X</option>
                    <option value="Apple Iphone 11">Apple Iphone 11</option>
                    <option value="Apple Iphone 12">Apple Iphone 12</option>
                    <option value="Apple Iphone 12 mini">Apple Iphone 12 mini</option>
                    <option value="Apple Iphone 13">Apple Iphone 13</option>
                    <option value="Apple Iphone 13 mini">Apple Iphone 13</option>
                    <option value="Apple Iphone 13 PRO Max">Apple Iphone 13 PRO Max</option>
                    <option value="Apple Iphone SE">Apple Iphone SE</option>

                </select>
                <label>  Készülék tárterülete:</label><select id="tarterulet" type="number" onChange={(e) => (setTarterulet(e.target.value))}>
                    <option value="">Válassz!</option>
                    <option value="64">64 GB</option>
                    <option value="128">128 GB</option>
                    <option value="256">256 GB</option>
                    <option value="512">512 GB</option>
                    <option value="1000">1 TB</option>
                </select>
                <label>  Mobil hálózat típusa:</label><select id="halozat" type="text" onChange={(e) => (setHalozat(e.target.value))}>
                    <option value="">Válassz!</option>
                    <option value="3G">3G</option>
                    <option value="LTE">LTE</option>
                    <option value="5G">5G</option>
                </select><br></br>
                <label>Készülék magassága:</label><input id="magassag" type="number" onChange={(e) => (setMagassag(e.target.value))} /> mm<br></br>
                <label>Készülék szélessége:</label><input id="szelesseg" type="number" onChange={(e) => (setSzelesseg(e.target.value))} /> mm<br></br>
                <label>Készülék vastagsága:</label><input id="vastagsag" type="number" onChange={(e) => (setVastagsag(e.target.value))} /> mm<br></br>
                <button onClick={send}>Beküld</button>
                <p>A zöld hátterű készülékek kimondottan nagy tárterülettel rendelkeznek(128 GB feletti)!</p>
            </div>
            <div id="kiir">
                <table>
                    <tbody>
                        <tr>
                            <th>Készülék típus:</th>
                            <th>Készülék tárterülete:</th>
                            <th>Mobil hálózat típusa:</th>
                            <th>Mobil felülete:</th>
                            <th>Mobil térfogata:</th>
                        </tr>

                        {Adat.map((item, index) => (
                            <tr onClick={() => torol(index)} key={index} className={meretes(item) === "nagy" ? "green" : "red"}>
                                <td>{item.tipus}</td>
                                <td>{item.tarterulet} GB</td>
                                <td>{item.halozat}</td>
                                <td>{terulet(item.magassag, item.szelesseg).toFixed(2)} mm<sup>2</sup></td>
                                <td>{terfogat(item.magassag, item.szelesseg, item.vastagsag).toFixed(2)} mm<sup>3</sup></td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
            
            <div id='footer'><hr></hr><p>Készítette: Rékási László</p></div>


        </div>



    )
}

export default Adatbeker;