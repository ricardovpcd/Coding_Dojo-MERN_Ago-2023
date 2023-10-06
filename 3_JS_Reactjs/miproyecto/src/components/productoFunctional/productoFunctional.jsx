import { useState } from "react";
import "./productoFunctional.css";

var ProductoFunctional = (props) => {
    const [stockState, setStockState] = useState(props.stock);
    const [nombreBotonState, setNombreBotonState] = useState("Comprar");

    const buy = () => {
        setStockState(stockState - 1);

        var newNombreBoton = nombreBotonState + "!";
        setNombreBotonState(newNombreBoton);
    }

    return(
        <div className="producto-container">
            <img className="producto-image" src={props.imagen}></img>
            <p className="producto-title"> {props.nombre} </p>
            <p className="producto-price">$ {props.precio}</p>
            <p>El stock es: {stockState}</p>
            <button onClick={buy}> {nombreBotonState} </button>
        </div>
    );
}

export default ProductoFunctional;