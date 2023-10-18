import { useState } from "react";
import "./queHaceres.css";

export const QueHaceres = (props) => {
    const [listaQueHaceres, setListaQueHaceres] = useState([]);
    const [input, setInput] = useState("");

    const agregar = () =>{
        // COPIAR EL ESTADO DEL ARRAY
        var listaQueHaceresTemporal = [...listaQueHaceres];
        // CREAR NUESTRO OBJETO A GUARDAR
        var objetoTemporal = {
            id: 4,
            nombre: input,
            checked: false
        }
        // INSERTAR NUESTRO OBJETO A LA LISTA
        listaQueHaceresTemporal.push(objetoTemporal);

        // ACTUALIZAR EL ESTADO
        setListaQueHaceres(listaQueHaceresTemporal);
    }

    const eliminar = (indice) => {
        // FILTRAR MI LISTA DE ESTADO
        var listaQueHaceresTemporal = listaQueHaceres.filter((item, i) => i != indice);

        // ACTUALIZAR EL ESTADO CON LA NUEVA LISTA FILTRADA
        setListaQueHaceres(listaQueHaceresTemporal);
    }

    const terminarTarea = (indice) => {
        var queHacerTemporal = {...listaQueHaceres[indice]};
        queHacerTemporal.checked = (queHacerTemporal.checked == true) ? false : true;

        var listaQueHaceresTemporal = [...listaQueHaceres];
        listaQueHaceresTemporal[indice] = queHacerTemporal;

        setListaQueHaceres(listaQueHaceresTemporal);
    }

    return (
        <div>
            <div>
                <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
                <button onClick={agregar}>Add</button>
            </div>  

            <div>
                {
                    listaQueHaceres.map((queHacer, index) => {
                        return <div>
                            
                            <label className={(queHacer.checked == true) ? "label-checked" : "label-normal"}
                                    onClick={()=>{terminarTarea(index)}}>{queHacer.nombre}</label>

                            <input type="checkbox" checked={queHacer.checked} onChange={()=>{terminarTarea(index)}}/>
                            <button onClick={()=>{eliminar(index)}}>Delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    );
};