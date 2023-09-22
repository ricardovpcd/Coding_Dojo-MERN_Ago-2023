//var = Re-inicializar y cambiar su valor
//let = cambiar su valor
//const = -

// scope = alcance de una variable (Inicializacion o re inicializacion)
// Scope: Block scope (scope de bloque) // Function Scope

// var: Function scope
// let: Block scope // Function scope
// const: Block scope // Function scope

let nombre = "Ricardo";

function llamar(){
    let nombre = "Juan";

    if(1 == 1){
        let nombre = "Carlos";
    }

    console.log("Log dentro de la funcion: " + nombre);
}

llamar();

console.log("Log Afuera: " + nombre);
