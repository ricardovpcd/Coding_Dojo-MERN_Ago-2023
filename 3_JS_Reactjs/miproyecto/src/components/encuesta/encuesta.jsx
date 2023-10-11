import { useState } from "react";

const Encuesta = (props) => {
    const [nombre, setNombre] = useState("");
    const [puntaje, setPuntaje] = useState(0);
    const [isError, setIsError] = useState(false);

    const [personas, setPersonas] = useState(["Ricardo", "Juan"]);

    const enviar = () => {
        if(nombre == "" || puntaje == 0){
            setIsError(true);
        } else {
            setIsError(false);

            var personasTemporal = [...personas];
            personasTemporal.push(nombre);
            setPersonas(personasTemporal);
        }
    }

    return (
        <div>
            <label>Nombre</label>
            <input type="text" value={nombre} onChange={(event) => {setNombre(event.target.value)}}/>
            <br />
            <label>Satisfecho con el servicio?</label>
            <input type="number" value={puntaje} onChange={(event) => {setPuntaje(event.target.value)}}/>
            <br />
            {
                (isError == true) ? <label>Falta un campo</label> : <p></p>
            }
            <br />
            <button onClick={enviar}>Enviar</button>

            <div>
                <p>Personas que realizaron la encuesta</p>
                {
                    personas.map((item) => {
                        return <p>Nombre: {item}</p>
                    })
                }
            </div>
        </div>
    );
}

export default Encuesta;