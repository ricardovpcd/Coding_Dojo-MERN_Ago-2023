import { Component } from "react";
import "./myInput.css";

class MyInput extends Component{
    
    onChangeInput = () => console.log("Funciona!");

    sombreando = () => {
        console.log("Sombreando");
    }

    render(){
        return (
            <input type="text" className="nuevaClase" onChange={this.onChangeInput} onFocus={this.sombreando}></input>
        );
    }
}

export default MyInput;