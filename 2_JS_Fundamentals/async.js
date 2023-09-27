/*var llamarApi = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Hola desde el API");
        resolve();
    }, 3000);
});*/

/*llamarApi()
    .then(() => {
        console.log("Se llamó al metodo");
    })
    .catch(() => {
        console.log("Se rechazó al metodo");
    });*/

async function llamarApi(){
    await saludar();
    console.log("Hola despues de saludar");
}

async function saludar(){
    console.log("Hola Ricardo");
    return "Hola";
}


llamarApi();