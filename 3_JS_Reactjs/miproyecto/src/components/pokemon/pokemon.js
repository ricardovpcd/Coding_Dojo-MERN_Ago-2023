import { Component } from "react";
import "./pokemon.css";

class Pokemon extends Component{

    constructor(props){
        super(props);

        this.state = {
            numero: 0
        }
    }

    clickPokemon = () => {
        var nombrePokemon = this.props.nombre;
        alert("Diste click en el pokemon: " + nombrePokemon);
    }

    render(){

        console.log(this);

        var myImagen = this.props.imagen;
        var myNombre = this.props.nombre;

        var numero = this.state.numero;

        return(
            <div>
                <img className="myImage" src={myImagen} alt="imagePokemon"></img>
                <br></br>
                <button onClick={this.clickPokemon} className="myBtnPokemon">Haz click en {myNombre}</button>
                <p>{numero}</p>
            </div>
        );
    }
}

export default Pokemon;