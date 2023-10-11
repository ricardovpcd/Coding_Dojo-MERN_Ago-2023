import { useState } from "react";

const MyMaster = (props) => {
    
    //var personas = ["Ricardo", "Juana", "Carlos", "Gabriel"];
    // INMUTABLE = NO SE PUEDE CAMBIAR
    // MUTABLE = SI SE PUEDE CAMBIAR
    const [personas, setPersonas] = useState(["Ricardo", "Juana", "Carlos", "Gabriel"]);
    const [nombre, setNombre] = useState("");

    const agregarPersona = () =>{
        var personasTemporal = [...personas];
        personasTemporal.push(nombre);
        setPersonas(personasTemporal);
    }

    return (
        <div>
            <p>Personas</p>
            <div>
                <input type="text" value={nombre} onChange={(event) => {setNombre(event.target.value)}}/>
                <button onClick={agregarPersona}>Agregar</button>
            </div>

            {
                personas.map((item) => {
                    return <p>Hola {item}</p>;
                })
            }
        </div>
    )
}

export default MyMaster;