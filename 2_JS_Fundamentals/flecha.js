// Named functions | Funciones Nombradas
/*function calcularEdadEnDiez(edad){
    return edad + 10;
}

var calculo = calcularEdadEnDiez(30);
console.log(calculo);*/

// Arrow function | funciones de flecha gorda
// Syntax "function"
// 1 sola linea sin llaves
// Si solo es 1 parametro no es necesario los parentesis
// this

var calcularEdadEnDiez = edad => edad + 10;

/*function saludar(nombre, nombre2){
    return "Hola! " + nombre + " y " + nombre2;
}*/

var saludar = (nombre, nombre2) => "Hola! " + nombre + " y " + nombre2;
var saludo = saludar("ricardo", "Juan");
console.log(saludo);