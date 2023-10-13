const Contador = (props) => {
    const incrementar = () =>{
        props.metodoNumber(props.numero + 1);
    }

    return (
      <div style={{border: "1px red solid"}}>
        Hola Contador!
        <button onClick={incrementar}>Incrementar Numero</button>
      </div>
    );
  };
  
  export default Contador;