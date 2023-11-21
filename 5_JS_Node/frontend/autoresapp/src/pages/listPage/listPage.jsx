import { Link, useNavigate } from 'react-router-dom';
import './listPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const ListPage = (props) => {
    const [listAuthors, setListAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        var isLogged = localStorage.getItem("isLogged");
        if(isLogged == null){
            navigate("/credentials");
        }

        callListApi();
    }, []);

    const callListApi = async () => {
        var jwt = localStorage.getItem("jwt");
        var config = {
            headers: {
                "Authorization": jwt
            },
        };

        var result = await axios.get("http://localhost:8080/api/author/get", config);
        setListAuthors(result.data);
    }

    const deleteAuthor = async (idAuth, index) => {
        var jwt = localStorage.getItem("jwt");
        var result = await axios.delete("http://localhost:8080/api/author/delete/" + idAuth, {
            headers: {
                "Authorization": jwt
            }
        });
        if(result.status == 200){
            var listAuthorsTemp = listAuthors.filter((auth, i) => i != index);
            setListAuthors(listAuthorsTemp);
            alert("Se ha eliminado correctamente");
        } else {
            alert("Hubo un error");
        }
    }

    const goToEdit = (idAuth) => {
        navigate("/edit/" + idAuth);
    }

    const goToViewBooks = (idAuth) => {
        navigate("/books/" + idAuth);
    }

    const goToCreateBook = (idAuth) => {
        navigate("/newBook/" + idAuth);
    }

    const logout = () =>{
        localStorage.removeItem("isLogged");
        navigate("/credentials");
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/new">Add an author</Link>
            <button onClick={logout}>Logout</button>
            <p>We have quotes by: </p>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>

                {
                    listAuthors.map((auth, index) => {
                        return <tr key={index}>
                                    <td>{auth.name}</td>
                                    <td>
                                        <button onClick={() => goToEdit(auth._id)}>Edit</button>
                                        <button onClick={() => deleteAuthor(auth._id, index)}>Delete</button>
                                        <button onClick={() => goToCreateBook(auth._id)}>Create Book</button>
                                        <button onClick={() => goToViewBooks(auth._id)}>View Books</button>
                                    </td>
                                </tr>
                    })
                }
            </table>
        </div>
    );
};