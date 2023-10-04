import { Component } from "react";
import Pokemon from "./components/pokemon/pokemon";

class App extends Component {
  render(){
    return (
      <div>
        <Pokemon imagen="https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png" nombre="Charizard"></Pokemon>
        <Pokemon imagen="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png" nombre="Eevee"></Pokemon>
        <Pokemon imagen="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg" nombre="Pikachu"></Pokemon>
      </div>
    );
  }
}

export default App;