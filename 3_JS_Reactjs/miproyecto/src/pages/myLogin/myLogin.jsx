import { useState } from "react";
import { Link } from 'react-router-dom';

const MyLogin = (props) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [terminos, setTerminos] = useState(false);
    const [genero, setGenero] = useState("");

    const doLoginState = () =>{
        console.log("Metodo DOLOGINSTATE");
        console.log(email);
        console.log(password);
        console.log(repeatPassword);
        console.log(terminos);
        console.log(genero);
    }

    return (
        <div>
            <label>Email</label>
            <input type="text" value={email} onChange={(event) => {setEmail(event.target.value);}}/>
            <br />
            <label>Password</label>
            <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
            <br />
            <label>Repeat Password</label>
            <input type="password" value={repeatPassword} onChange={(event) => {setRepeatPassword(event.target.value);}}/>
            <br />
            <label>Aceptar Terminos y Condiciones?</label>
            <input type="checkbox" name="" id="" checked={terminos} onChange={(event) => {setTerminos(event.target.checked);}} />
            <br />
            <label>Genero</label>
            <select value={genero} onChange={(event) => {setGenero(event.target.value);}}>
                <option value="">Seleccione su Genero</option>
                <option value="Masc">Masculino</option>
                <option value="Fem">Femenino</option>
            </select>
            <br />
            <button onClick={doLoginState}>Login</button>

            <div>
                Mi Email es: {email}
                <br />
                Mi Password es: {password}
            </div>

            <Link to="/">Ir a la pagina principal</Link>
        </div>
    )
}

export default MyLogin;