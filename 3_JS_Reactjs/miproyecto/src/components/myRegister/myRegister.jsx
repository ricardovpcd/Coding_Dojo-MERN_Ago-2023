import { useState } from "react";

const MyRegister = (props) => {
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isError, setIsError] = useState(false);

    const registro = () =>{
        if(usuario == "" || email == "" || password == ""){
            setIsError(true);
        } else {
            setIsError(false);
        }
        
    }

    const boton = ()=>{
        return (<button onClick={registro}>Registrame!</button>);
    }

    const mensaje = () => {
        return (isError == true) ? 
                <label style={{color: "red"}}>Error en formulario</label> 
                : <label style={{color: "green"}}>Registro Completo</label> ;
    }

    return (
        <div>
            {boton()}
            <br />
            <label>Usuario</label>
            <input type="text" value={usuario} onChange={(event) => {setUsuario(event.target.value)}}/>
            <br />
            <label>Email</label>
            <input type="text" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
            <br />
            <label>Password</label>
            <input type="password" value={password}  onChange={(event) => {setPassword(event.target.value)}}/>
            <br />
            {mensaje()}
            <br />
            {boton()}
        </div>
    );
};

export default MyRegister;