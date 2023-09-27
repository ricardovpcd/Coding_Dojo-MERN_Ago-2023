// Programacion sync
/*function calcularEdad(edad){
    return edad + 10;
}

var calculo = calcularEdad(45);
console.log(calculo);
console.log("Hola Ricardo");*/

// programacion async
function despedirse(){
    console.log("Adios Ricardo");
}

function saludar(metodoAEjecutar){
    console.log("Hola Ricardo");
    metodoAEjecutar();
}

function llamarApi(metodoAEjecutar){
    setTimeout(() => {
        console.log("Hola desde el API");
        metodoAEjecutar(despedirse);
    }, 3000);
}

llamarApi(saludar);

//Callback hell