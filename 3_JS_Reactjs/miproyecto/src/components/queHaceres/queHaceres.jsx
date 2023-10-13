import { useState } from "react";

export const QueHaceres = (props) => {

                                      //   0           1          2     
    const [lista, setLista] = useState(["Python", "Javascript", "PHP"]);
    const [input, setInput] = useState("");

    const addItem = () =>{
        /*var listaTemporal = [...lista];
        listaTemporal.push(input);
        setLista(listaTemporal);*/
        setLista([...lista, input]);
        setInput("");
    }

    const deleteItem = (indice) => {
        /*var listaTemporal = lista.filter((item, i) => i != indice);
        setLista(listaTemporal);*/
        setLista(lista.filter((item, i) => i != indice))
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
            <button onClick={addItem}>Add</button>
            <br />
            <br />
            {
                lista.map((item, index) => {
                    return <div key={index}>
                                <label>{index}</label>
                                <label>{item}</label>
                                <input type="checkbox"/>
                                <button onClick={() => {deleteItem(index)}}>Delete</button>
                            </div>
                })
            }
        </div>
    );
};