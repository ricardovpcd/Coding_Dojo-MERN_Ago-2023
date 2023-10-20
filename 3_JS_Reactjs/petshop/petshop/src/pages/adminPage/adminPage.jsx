import { useState } from 'react';
import { Link } from 'react-router-dom';

export const AdminPage = (props) => {
    const [usersList, setUsersList] = useState([
        {
            name: "Ricardo",
            age: 30
        }, 
        {
            name: "juan",
            age: 45
        }, 
        {
            name: "Carla",
            age: 32
        }]);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const add = () => {
        if(name == "" || age == ""){
            alert("Falta un dato");
        } else {
            var usersListTemp = [...usersList];
            var obj = {
                name: name,
                age: age
            };
    
            usersListTemp.push(obj);
            setUsersList(usersListTemp);
    
            setName("");
            setAge("");
        }
    }

    return (
        <div>
            <Link to="/login">Salir</Link>
            <br />
            <label>Nombre</label>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <label>Edad</label>
            <input type="number" value={age} onChange={(e) => {setAge(e.target.value)}}/>
            <button onClick={add}>Agregar</button>

            <div>
                {
                    usersList.map((item, index) => {
                        return <div key={index}>
                            <label>El nombre es: {item.name}</label>
                            <label>La edad es: {item.age}</label>
                        </div>
                    })
                }
            </div>
        </div>
    );
};