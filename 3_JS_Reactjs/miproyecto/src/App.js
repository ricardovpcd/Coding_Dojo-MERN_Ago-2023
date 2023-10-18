import { useState } from "react";
import Contador from "./components/contador/contador";
import MyEjecutor from "./components/myEjecutor/myEjecutor";
import PersonCard from "./components/personCard/personCard";
import Pokemon from "./components/pokemon/pokemon";
import { QueHaceres } from "./components/queHaceres/queHaceres";
import { CallApi } from "./components/callApi/callApi";
import { CallApiAxios } from "./components/callApiAxios/callApiAxios";
import { PokemonApi } from "./components/pokemonApi/pokemonApi";
import { MyList } from "./components/myLista/myList";
import { UseEffect } from "./components/useEffect/useEffect";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyMain from './pages/myMain/myMain';
import MyLogin from './pages/myLogin/myLogin';
import MyRegister from './pages/myRegister/myRegister';
import { MyReport } from "./pages/myReport/myReport";

const App = () => {
    return (
      <div>
        <BrowserRouter>

          <Routes>

            <Route path="/" element={<MyMain></MyMain>}/>
            <Route path="/login" element={<MyLogin></MyLogin>}/>
            <Route path="/register" element={<MyRegister></MyRegister>}/>

            
            <Route path="/admin/welcome" element={<div>Hello!</div>}/>

            
            <Route path="/reporte/:nombre1/:nombre2" element={<MyReport></MyReport>}/>

          </Routes>

        </BrowserRouter>


        {/*<QueHaceres></QueHaceres>*/}
        {/*<UseEffect></UseEffect>*/}
        {/*<MyList></MyList>*/}
        {/*<PokemonApi></PokemonApi>*/}
        {/*<CallApiAxios></CallApiAxios>*/}
        {/*<CallApi></CallApi>*/}
        {/*El numero es {number}
        <Contador numero={number} metodoNumber={setNumber}></Contador>*/}
        {/*<Pokemon></Pokemon>*/}
      </div>
    );
}

export default App;