import { Component } from "react";
import "./pokemon.css";

class Pokemon extends Component{
    clickPokemon = () => {
        var nombrePokemon = this.props.nombre;
        alert("Diste click en el pokemon: " + nombrePokemon);
    }

    render(){
        var myImagen = this.props.imagen;
        var myNombre = this.props.nombre;

        return(
            <div>
                <img className="myImage" src={myImagen} alt="imagePokemon"></img>
                <br></br>
                <button onClick={this.clickPokemon} className="myBtnPokemon">Haz click en {myNombre}</button>
            </div>
        );
    }
}

export default Pokemon;