import axios from 'axios';

export const CallApiAxios = (props) => {

    const llamarAxios = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {

            })
    }

    const llamarAxiosAsync = async () =>{
        var response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(response.data);
    }

    return (
        <div>
            Call Api Axios!
            <br />
            <button onClick={llamarAxiosAsync}>Llamar API Axios</button>
        </div>
    );
};