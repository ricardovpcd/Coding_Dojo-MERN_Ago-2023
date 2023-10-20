import "./loginPage.css";
import { MyButton } from "../../components/myButton/myButton";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const LoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const acceso = () => {
        if(email == "" || password == ""){
            setIsError(true);
        } else {
            navigate("/admin");
        }
    }

    return (
        <div className="login-container">
            <label>Email</label>
            <br />
            <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <br />
            <label>Password</label>
            <br />
            <input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <br />
            {
                (isError) ? <p>Falta llenar un dato</p> : <div></div>
            }
            <MyButton title="Login" method={acceso}></MyButton>
        </div>
    );
};