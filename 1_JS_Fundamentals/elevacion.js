// Hoisting
// Solo se eleva la incialicion de los "var" de las functions

console.log(nombre);
console.log(llamar());
// Esta linea de codigo me saldra error
console.log(edad);

var nombre = "Juan";
function llamar(){
    console.log("Te estan llamando");
}

let edad = 33;

