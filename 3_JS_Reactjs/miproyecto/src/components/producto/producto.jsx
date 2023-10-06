import { Component } from "react";
import "./producto.css";

class Producto extends Component{
    constructor(props){
        super(props);

        this.state = {
            stock: props.stock,
            nombreBoton: "Comprar"
        }

        console.log("Se ejecuto el metodo CONSTRUCTOR");
    }

    buy = () => {
        if(this.state.stock == 0){
            alert("Ya no hay stock");
        } else {
            this.setState({
                stock: this.state.stock - 1,
                nombreBoton: this.state.nombreBoton + "!"
            });
        }
    }

    render(){
        console.log("Se ejecuto el metodo RENDER");
        var myPrecio = this.props.precio / 2;
        var myNombre = this.props.nombre;

        return(
            <div className="producto-container">
                <img className="producto-image" src={this.props.imagen}></img>
                <p className="producto-title"> {myNombre} </p>
                <p className="producto-price">$ {myPrecio}</p>
                <p>El stock es: {this.state.stock}</p>
                <button onClick={this.buy}> {this.state.nombreBoton} </button>
            </div>
        );
    }

    componentDidUpdate(){
        console.log("Se ejecuto el metodo componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Se ejecuto el metodo componentWillUnmount");
    }
}

export default Producto;