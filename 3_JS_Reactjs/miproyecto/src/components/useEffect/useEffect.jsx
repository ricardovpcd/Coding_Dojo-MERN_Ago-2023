import { useEffect, useState } from "react";

export const UseEffect = (props) => {

    const [number, setNumber] = useState(0);
    const [nombre, setNombre] = useState("");

    // AL INICIALIZAR Y CADA VEZ QUE SE CAMBIAN LOS ESTADOS
    /*useEffect(()=>{
        console.log("UseEffect!!");
    });*/

    // SOLO AL INICIALIZAR
    /*useEffect(()=>{
        console.log("UseEffect!!");
    }, []);*/

    // AL INICIALIZAR Y SOLO AL CAMBIAR LOS ESTADOS DENTRO DEL ARRAY
    useEffect(()=>{
        console.log("UseEffect!!");
    }, [number, nombre]);

    return (
        <div>
            Hola UseEffect!

            <button onClick={()=>{setNumber(number + 1)}}>Cambiar Numero</button>
        </div>
    );
};