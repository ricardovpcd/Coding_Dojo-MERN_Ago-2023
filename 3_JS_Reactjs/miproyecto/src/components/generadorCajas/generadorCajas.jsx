import { useState } from "react";

const GeneradorCajas = (props) => {
    const [colores, setColores] = useState(["red", "blue", "purple"]);
    
    const [nombreColor, setNombreColor] = useState("");

    const addColor = () => {
        var coloresTemporal = [...colores];
        coloresTemporal.push(nombreColor);
        setColores(coloresTemporal);
    }

    const onChangeInput = (event) => {setNombreColor(event.target.value)};

    return (
        <div>
            <label>Color</label>
            <input type="text" value={nombreColor} onChange={onChangeInput}/>
            <button onClick={addColor}>Add</button>

            <div>
                {
                    colores.map((item) => {
                        return <div style={{width: "40px", height: "40px", background: item, margin: "10px"}}></div>
                    })
                }
            </div>

        </div>
    );
}

export default GeneradorCajas;