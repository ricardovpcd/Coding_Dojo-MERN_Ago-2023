const MyEjecutor = (props) => {
  return (
    <div>
      Hola Ejecutor!
      <button onClick={props.metodoSaludo}>Saludame desde el componente Ejecutor</button>
    </div>
  );
};

export default MyEjecutor;