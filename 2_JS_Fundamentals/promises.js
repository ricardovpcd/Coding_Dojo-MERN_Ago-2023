var saludar = () => console.log("Hola Ricardo");

var llamarApi = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Hola desde el API");
        resolve();
    }, 3000);
});

llamarApi
    .then(() => {
        saludar();
    })
    .catch(()=>{
        console.log("Se termino la promesa REJECT");
    });