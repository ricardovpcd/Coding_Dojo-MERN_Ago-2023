import { MyButton } from "../../components/myButton/myButton";

export const RegisterPage = (props) => {

    const register = () => {
        console.log("Metodo desde register");
    }

    return (
        <div>
            <label>Name</label>
            <input type="text"/>
            <br />
            <label>Email</label>
            <input type="text"/>
            <br />
            <label>Password</label>
            <input type="text"/>
            <br />
            <label>Repeat Password</label>
            <input type="text"/>
            <br />
            <MyButton title="Register" method={register}></MyButton>
        </div>
    );
};