export const CallApi = (props) => {
    /*const miPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("Todo Bien!");
            reject("Todo Mal!");
        }, 3000);
    });*/

    const llamar = () =>{
        /*miPromesa
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });*/

        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((res)=>{
                res.json()
                .then((res2) => {
                    console.log(res2);
                })
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div>
            Call API!
            <br />
            <button onClick={llamar}>Llamar a promesa</button>
        </div>
    );
};