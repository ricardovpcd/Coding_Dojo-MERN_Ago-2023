import { useState } from "react";
import axios from 'axios';

export const PokemonApi = (props) => {

    const [pokemones, setPokemones] = useState([]);

    const llamarApi = async () =>{
        var response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
        var lista = response.data.results;

        setPokemones(lista);
    }

    return (
        <div>
            <button onClick={llamarApi}>Fetch Pokemon</button>

            {
                pokemones.map((item, index) => {
                    return <div>
                        <p>Hola {item.name}</p>
                        <p>Url: {item.url}</p>
                        <p>Photo: {item.photo}</p>
                    </div>
                })
            }

        </div>
    );
};