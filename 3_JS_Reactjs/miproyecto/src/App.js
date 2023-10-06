import { Component } from "react";
import Producto from "./components/producto/producto";
import ProductoFunctional from "./components/productoFunctional/productoFunctional";
import PersonCard from "./components/personCard/personCard";

import MyInput from "./components/myInput/myInput";
import MyBtn from "./components/myBtn";
import MyInputPassword from "./components/myInputPassword";
import MyContainer from "./components/myContainer/MyContainer";

class App extends Component {
  render(){
    return (
      <div>

        <MyContainer>
          <MyInput></MyInput>
          <br></br>
          <MyInput></MyInput>
          <br></br>
          <MyBtn title="Login"></MyBtn>
        </MyContainer>

        <br></br>

        <MyContainer>
          <MyInput></MyInput>
          <br></br>
          <MyInputPassword></MyInputPassword>
        </MyContainer>

        {/*<PersonCard firstName="Perez" 
                    lastName="Edgar" 
                    age={30} 
                    hairColor="Black"></PersonCard>

        <PersonCard firstName="Vasquez" 
                    lastName="Ricardo" 
                    age={50} 
                    hairColor="Brown"></PersonCard>*/}

        {/*<ProductoFunctional imagen="https://picsum.photos/200/300"
                  precio={20}
                  nombre="Casaca"
                  stock={25}></ProductoFunctional>

        <hr></hr>

        <Producto imagen="https://media.istockphoto.com/id/510615049/es/foto/hombres-pantalones-de.jpg?s=612x612&w=0&k=20&c=6iYxNTSr6-66AIiHIx8nqRj8_CCquo2oXdxRs2u0l9Y=" 
                  precio={30}
                  nombre="Pantalon"
                  stock={15}></Producto>
        <Producto imagen="https://picsum.photos/200/300"
                  precio={20}
                  nombre="Casaca"
                  stock={25}></Producto>
        <Producto imagen="https://picsum.photos/200"
                  precio={10}
                  nombre="Camisa"
                  stock={5}></Producto>*/}
      </div>
    );
  }
}

export default App;